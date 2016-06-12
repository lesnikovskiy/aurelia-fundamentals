import {eventsData} from "services/eventsData";
import {jobsData, states, jobTypes, jobSkills} from "services/jobsData";
import moment from "moment";
import {BindingSignaler} from "aurelia-templating-resources";
import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

function filterAndFormat(pastOrFuture, events) {
    var results = JSON.parse(JSON.stringify(events));
    if (pastOrFuture === "past") {
        results = results.filter(item => moment(item.dateTime) < moment());
    } else if (pastOrFuture === "future") {
        results = results.filter(item => moment(item.dateTime) > moment());
    } else {
        results = results;
    }

    return results;
}

@inject(BindingSignaler, HttpClient)
export class DataRepository {
    constructor(bindingSignaler, httpClient) {
        this.httpClient = httpClient;
        setInterval(() => bindingSignaler.signal("check-freshness"), 1000);
    }
    
    getEvents(pastOrFuture) {
        let promise = new Promise((resolve, reject) => {
            if (!this.events) {
                this.httpClient.get("http://localhost:8080/api/events")
                    .then(result => {
                        let data = JSON.parse(result.response);
                        this.events = data.sort((a, b) => a.dateTime >= b.dateTime ? 1 : -1);

                        resolve(filterAndFormat(pastOrFuture, this.events));
                    });
                // setTimeout(_ => {
                //     this.events = eventsData.sort((a, b) => a.dateTime >= b.dateTime ? 1 : -1);
                //     resolve(filterAndFormat(pastOrFuture, this.events));
                // }, 10);
            } else {
                resolve(filterAndFormat(pastOrFuture, this.events));
            }
        });
        return promise;
    }

    getEvent(eventId) {
        return this.events.find(item => item.id == eventId);
    }

    addJob(job) {
        return new Promise((resolve, reject) => {
            if (!this.jobs) {
                this.jobs = jobsData;
            }
            this.jobs.push(job);
            resolve(job);
        })
    }

    getJobs() {
        return new Promise((resolve, reject) => {
            if (!this.jobs) {
                this.jobs = jobsData;
            }
            resolve(this.jobs);
        });
    }

    getStates() {
        return new Promise((resolve, reject) => {
            if (!this.states) {
                this.states = states;
            }
            resolve(this.states);
        });
    }

    getJobTypes() {
        return new Promise((resolve, reject) => {
            if (!this.jobTypes) {
                this.jobTypes = jobTypes;
            }
            resolve(this.jobTypes);
        })
    }

    getJobSkills() {
        return new Promise((resolve, reject) => {
            if (!this.jobSkills) {
                this.jobSkills = jobSkills;
            }
            resolve(this.jobSkills);
        })
    }
}
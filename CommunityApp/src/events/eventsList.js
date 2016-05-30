import {inject} from "aurelia-framework";
import {DataRepository} from "services/dataRepository";
import {Router, activationStrategy} from "aurelia-router";

@inject(DataRepository, Router)
export class EventsList {
    constructor(dataRepository, router) {
        this.dataRepository = dataRepository;
        this.router = router;
        this.whoareyou = "Events List"; 
    }
    
    goToDiscussion() {
        //this.router.navigate("#/discussion");
        this.router.navigateToRoute("eventDetail", {eventId: this.events[0].id})
    }
    
    activate(params, routeConfig) {
        let pastOrFuture = routeConfig.name == "" ? "future" : routeConfig.name;
        return this.dataRepository.getEvents(pastOrFuture).then(events => {
            if (params.speaker || params.topic) {
                var filteredResults = [];
                events.forEach(item => {
                    if (params.speaker && item.speaker.toLowerCase().indexOf(params.speaker.toLowerCase()) >= 0) {
                        filteredResults.push(item);
                    }
                    
                    if (params.topic && item.title.toLowerCase().indexOf(params.topic.toLowerCase()) >= 0) {
                        filteredResults.push(item);
                    }
                });
                this.events = filteredResults;
            } else {
                this.events = events;
            }
            this.events.forEach(item => item.detailUrl = this.router.generate("eventDetail", {eventId: item.id}))
        });
    }
    
    determineActivationStrategy() {
        return activationStrategy.replace;
    }
}
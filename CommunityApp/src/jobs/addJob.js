import {inject} from "aurelia-framework";
import {DataRepository} from "services/dataRepository";

@inject(DataRepository)
export class AddJob {   
    constructor(dataRepository) {
        this.job = {jobType: "Full Time", jobSkills: []};
        this.dataRepository = dataRepository;
        this.dataRepository.getStates().then(states => this.states = states);
        this.dataRepository.getJobTypes().then(jobTypes => this.jobTypes = jobTypes);
        this.dataRepository.getJobSkills().then(jobSkills => this.jobSkills = jobSkills);
    }
    
    activate(params, routeConfig, navigationInstruction) {
        this.router = navigationInstruction.router;
    }
    
    save() {
        if (this.job.needDate) {
            this.job.needDate = new Date(this.job.needDate);
        }
        this.dataRepository.addJob(this.job).then(job => this.router.navigateToRoute("jobs"));
    }
}
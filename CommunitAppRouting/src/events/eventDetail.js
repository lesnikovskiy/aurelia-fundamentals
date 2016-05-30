import {inject} from "aurelia-framework";
import {DataRepository} from "services/dataRepository";

@inject(DataRepository)
export class EventDetail {
    constructor(dataRepository) {
        this.dataRepository = dataRepository;
    }
    
    activate(params, routeConfig) {
        this.event = this.dataRepository.getEvent(parseInt(params.eventId));
    }
}
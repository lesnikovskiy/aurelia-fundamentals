import {inject} from "aurelia-framework";
import {DataRepository} from "services/dataRepository";
import {DialogService} from "aurelia-dialog";
import {EditDialog} from "events/EditDialog";

@inject(DataRepository, DialogService)
export class EventDetail {
    constructor(dataRepository, dialogService) {
        this.dataRepository = dataRepository;
        this.dialogService = dialogService;
    }
    
    activate(params, routeConfig) {
        this.event = this.dataRepository.getEvent(parseInt(params.eventId));
    }

    editEvent(event) {
        var original = JSON.parse(JSON.stringify(event));
        this.dialogService.open({viewModel: EditDialog, model: this.event})
            .then(result => {
                if (result.wasCancelled) {
                    this.event.title = original.title;
                    this.event.description = original.description;
                }
            });
    }
}
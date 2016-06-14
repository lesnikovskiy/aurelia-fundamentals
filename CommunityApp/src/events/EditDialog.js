import {DialogController} from "aurelia-dialog";
import {inject} from "aurelia-framework";

@inject(DialogController)
export class EditDialog {
    constructor(dialogController) {
        this.dialogController = dialogController;
    }

    activate(event) {
        this.event = event;
    }

    save() {
        this.dialogController.ok();
    }

    cancel() {
        this.dialogController.cancel();
    }
}
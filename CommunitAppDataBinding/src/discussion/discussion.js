function getDiscussionInput() {
    return "";
}

function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export class Discussion {
    activate() {
        this.discussionInput = getDiscussionInput();
        this.originalInput = cloneObject(this.discussionInput);
    }
        
    save() {
        this.originalInput = cloneObject(this.discussionInput);
    }
    
    canDeactivate() {
        if (JSON.stringify(cloneObject(this.discussionInput)) !== JSON.stringify(this.originalInput)) {
            if (confirm("Unsaved data, are you sure want to navigate away?")) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
    
    deactivate() {
        console.log("Discussion deactivated");
    }
}
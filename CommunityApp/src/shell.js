import toastr from "toastr";
import moment from "moment";
import {EventAggregator} from "aurelia-event-aggregator";
import {NotificationPayload} from "common/NotificationPayload";
import {inject} from "aurelia-framework";

@inject(EventAggregator)
export class Shell {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        // this.eventAggregator.subscribe(NotificationPayload, payload => {
        //     this.notification = payload.time;
        // });
        this.eventAggregator.subscribe("topic", payload => {
            this.notification = payload.time;
        });
        setInterval(_ => this.timeIs = moment().format("hh:mm:ss.SSS"), 100);
    }

    clearNotification() {
        this.notification = null;
    }
    
    configureRouter(config, router) {
        this.router = router;
        config.title = "Capital Area .NET User Group";
        config.addPipelineStep("authorize", TostNavResult);
        //config.options.pushState = true; // to remove # from URL
        config.map([
            {
                route: ["", "events"], viewPorts: {
                    mainContent: { moduleId: "events/events" },
                    sideBar: { moduleId: "sideBar/sponsors" }
                },
                name: "Events", title: "Events", nav: true
            },
            {
                route: "jobs", viewPorts: {
                    mainContent: { moduleId: "jobs/jobs" },
                    sideBar: { moduleId: "sideBar/sponsors" }
                },
                title: "Job Board", name: "jobs", nav: true
            },
            {
                route: "discussion", viewPorts: {
                    mainContent: { moduleId: "discussion/discussion" },
                    sideBar: { moduleId: "sideBar/sponsors" }
                },
                title: "Discussion", nav: true
            },
            {
                route: "eventDetail/:eventId", viewPorts: {
                    mainContent: { moduleId: "events/eventDetail" },
                    sideBar: { moduleId: "sideBar/sponsors" }
                },
                name: "eventDetail"
            },
            {
                route: "addJob", viewPorts: {
                    mainContent: {moduleId: "jobs/addJob"},
                    sideBar: { moduleId: "sideBar/sponsors" }
                },
                name: "addJob"
            }
        ]);
    }
}

class TostNavResult {
    run(navigationInstruction, next) {
        return next().then(a => {
            toastr.info(a.status);
            return a;
        });
    }
}
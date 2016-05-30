import toastr from "toastr";

export class Shell {
    configureRouter(config, router) {
        this.router = router;
        config.title = "Capital Area .NET User Group";
        config.addPipelineStep("modelbind", TostNavResult);
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
                title: "Job Board", nav: true
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
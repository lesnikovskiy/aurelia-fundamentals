export class Events {
    configureRouter(config, router) {
        this.router = router;
        config.title = "Events";
        config.map([
            {route: ["", "future"], moduleId: "events/eventsList", title: "Future Events", nav: true, name: "future"},
            {route: "past", moduleId: "events/eventsList", title: "Past Events", nav: true, href: "#/events/past", name: "past"}
        ]);
    }
}
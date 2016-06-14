import "bootstrap";

export function configure(aurelia) {
    aurelia.use.instance("apiRoot", "http://localhost:8080/")
    aurelia.use.globalResources("common/dateFormat");
       
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-dialog');
        
    aurelia.start().then(a => a.setRoot("shell"));
}
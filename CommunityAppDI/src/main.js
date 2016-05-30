import "bootstrap";
import {DataCache} from "./dataCache";
import {Plugin1} from "./plugin1";
import {Plugin2} from "./plugin2";

export function configure(aurelia) {
    let cache = new DataCache();
    cache.data.push('1');
     cache.data.push('2');
      cache.data.push('3');
    aurelia.use.instance("Cache", cache);    
    aurelia.use.transient("SuperPlugIn", Plugin1);
    aurelia.use.transient("SuperPlugIn", Plugin2);
    
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
        
    aurelia.start().then(a => a.setRoot("shell"));
}
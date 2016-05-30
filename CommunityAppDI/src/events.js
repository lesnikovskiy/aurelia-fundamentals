import {inject, Lazy, All} from "aurelia-framework";
import {ImLazy} from "./ImLazy";

@inject('Cache', Lazy.of(ImLazy), All.of("SuperPlugIn"))
export class Events {
    constructor(dataCache, lazyOfImLazy, plugins) {
        this.events = [
            {id:1, title: "Aurelia Fundamentals"},
            {id:2, title: "Data-Centric SPAs with BreezeJS"}
        ];
        this.cache = dataCache;
        this.cache.data.push('a');
        
        this.lazyOfImLazy = lazyOfImLazy;
        plugins.forEach(plugin => plugin.doPlugInStuff());
    }
    
    createAndUseLazy() {
        console.log("about to use lazy");
        this.lazyOfImLazy().doStuff();
    }
}
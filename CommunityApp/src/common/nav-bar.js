import {containerless, customElement, bindable} from "aurelia-framework";

// to render element as regular dom use this attribute
//@containerless()
// optional, use in case you want to control custom element name
@customElement("navigation-bar")
export class NavBar {
    @bindable router;

    created(view) {

    }

    bind(bindingContext, overrideContext) {

    }

    unbind() {

    }

    attached() {

    }

    detached() {

    }
}
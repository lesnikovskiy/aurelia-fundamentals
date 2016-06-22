import {BoundViewFactory, ViewSlot, customAttribute, templateController, inject} from "aurelia-framework";

@customAttribute("items-control2")
@templateController
@inject(BoundViewFactory, ViewSlot)
export class ItemsControl2 {
	constructor(viewFactory, viewSlot) {
		this.viewFactory = viewFactory;
		this.viewSlot = viewSlot;
		this.viewInstances = [];
	}

	valueChanged(newValue) {
		this.viewInstances.forEach(view => {
			this.viewSlot.remove(view);
			view.unbind();
		});

		this.viewInstances = [];

		newValue.forEach(value => {
			let view = this.viewFactory.create();
			view.bind(value);
			this.viewSlot.add(view);
		});
	}
}
import {bindable, customAttribute, inject} from "aurelia-framework";

@inject(Element)
// SpeakerImageCustomAttribute defaults by convention
// to <element speaker-image />
// or name it your way via @customAttribute
@customAttribute("speaker-img")
export class SpeakerImage {
	@bindable imageName;
	@bindable isMvp;

	constructor(element) {
		this.element = element;
	}

	imageNameChanged(newValue) {
		debugger
		this.element.src = `images/speakers/${newValue}`;
	}

	isMvpChanged(newValue) {
		debugger
		if (newValue) {
			let el = document.createElement("div");
			el.innerHTML = "MVP";
			el.className = "watermark";
			this.element.parentNode.insertBefore(el, this.element.nextSibling);
		}
	}
}
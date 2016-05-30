import {MyBase} from "./MyBase";
import {compute,val2} from "./someOtherModule";
import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@inject(HttpClient)
export class SimpleClass extends MyBase {
	constructor(http) {
		super();
		this.name = "Barney";
	}
	
	myproperty = 42;
	
	get message() {
		let threshold = 40;
		let result = `Hello ${this.name}, are you ${5+threshold} years old?`;
		
		return result;
	}
	
	calculate() {
		return compute() + val2;
	}
	
	startEngine() {
		var promise = new Promise(function(resolve, reject) {
			setTimeout(() => resolve('Roar!!!'), 5000);
		});
		return promise;
	}
}
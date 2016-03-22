import {Directive, ElementRef} from 'angular2/core';

declare var $:any;

@Directive({
	selector: '[material-box]'
})
export class MaterialBoxDirective {
	constructor(el: ElementRef) {
		$(el.nativeElement).materialbox();
	}
}

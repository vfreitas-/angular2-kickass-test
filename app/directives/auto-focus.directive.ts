import {Directive, ElementRef} from 'angular2/core';

@Directive({
	selector: '[autofocus]'
})
export class AutoFocusDirective {
	constructor(el: ElementRef) {
		el.nativeElement.focus();
	}
}

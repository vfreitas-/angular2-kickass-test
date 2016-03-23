//import rxjs for http toPromise option
import 'rxjs/Rx';
import {provide, PLATFORM_PIPES, PLATFORM_DIRECTIVES} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'

import {AppComponent} from './components/app.component';

import {MomentPipe} from './pipes/moment.pipe';
import {ImageRenderPipe} from './pipes/image-render.pipe';
import {YoutubeEmbedPipe} from './pipes/youtube-embed.pipe';

import {AutoFocusDirective} from './directives/auto-focus.directive';
import {MaterialBoxDirective} from './directives/materialbox.directive';

//register our pipes in the global pipes
bootstrap(AppComponent, [
	provide(PLATFORM_PIPES, {
		useValue: [MomentPipe, ImageRenderPipe, YoutubeEmbedPipe],
		multi: true
	}),
	provide(PLATFORM_DIRECTIVES, {
		useValue: [AutoFocusDirective, MaterialBoxDirective],
		multi: true})
]);

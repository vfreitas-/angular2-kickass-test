//import rxjs for http toPromise option
import 'rxjs/Rx';
import {provide, PLATFORM_PIPES} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'

import {AppComponent} from './components/app.component';

import {MomentPipe} from './pipes/moment.pipe';
import {ImageRenderPipe} from './pipes/image-render.pipe';

//register our pipes in the global pipes
bootstrap(AppComponent, [
	provide(PLATFORM_PIPES, {
		useValue: [MomentPipe, ImageRenderPipe],
		multi: true
	})
]);

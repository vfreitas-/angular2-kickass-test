import 'rxjs/Rx';
import {provide, PLATFORM_PIPES} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'

import {AppComponent} from './components/app.component';

import {MomentPipe} from './pipes/moment.pipe';
import {ImageRenderPipe} from './pipes/image-render.pipe';


bootstrap(AppComponent, [
	provide(PLATFORM_PIPES, {
		useValue: [MomentPipe, ImageRenderPipe],
		multi: true
	})
]);

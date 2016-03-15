import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {HeaderComponent} from './header.component';
import {DashboardComponent} from './dashboard.component';

//import * as kat from 'node_modules/kickass-api/index.js';

@Component({
	selector: 'app',
	directives: [ROUTER_DIRECTIVES, HeaderComponent],
	providers: [ROUTER_PROVIDERS],
	template: `
		<header></header>
		<router-outlet></router-outlet>
	`
})
@RouteConfig([
	{
		path: '/',
		name: 'Dashboard',
		component: DashboardComponent
	}
])
export class AppComponent {

}

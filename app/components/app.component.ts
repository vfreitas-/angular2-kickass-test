import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {MovieService} from '../services/kickass.service';

import {HeaderComponent} from './header.component';
import {DashboardComponent} from './dashboard.component';

@Component({
	selector: 'app',
	directives: [ROUTER_DIRECTIVES, HeaderComponent],
	providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, MovieService],
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

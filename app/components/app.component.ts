import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {HeaderComponent} from './header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MovieComponent} from './movie/movie.component';

import {MovieService} from '../services/tmdb/movie.service';
import {MediaService} from '../services/tmdb/media.service';
import {ConfigurationService} from '../services/tmdb/configuration.service';


@Component({
	selector: 'app',
	directives: [ROUTER_DIRECTIVES, HeaderComponent],
	providers: [
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
		ConfigurationService,
		MovieService,
		MediaService
	],
	template: `
		<header></header>
		<breadcrumb></breadcrumb>
		<router-outlet></router-outlet>
	`
})
@RouteConfig([
	{
		path: '/',
		name: 'Dashboard',
		component: DashboardComponent
	},
	{
		path: '/movie/:id',
		name: 'Movie',
		component: MovieComponent
	}
])
export class AppComponent {

}

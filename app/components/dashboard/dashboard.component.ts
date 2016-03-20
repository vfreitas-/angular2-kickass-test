import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {MoviesComponent} from '../movies/movies.component';

@Component({
	selector: 'dashboard',
	directives: [ROUTER_DIRECTIVES, MoviesComponent],
	templateUrl: 'app/components/dashboard/dashboard.html'
})
export class DashboardComponent {

	constructor() {}
}

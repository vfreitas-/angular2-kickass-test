import {Component, OnInit, AfterViewInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {MoviesComponent} from '../movies/movies.component';

declare var $:any;

@Component({
    selector: 'dashboard',
    directives: [ROUTER_DIRECTIVES, MoviesComponent],
    templateUrl: 'app/components/dashboard/dashboard.html'
})
export class DashboardComponent implements AfterViewInit {

    public movieLists = [
        {name: 'popular', title: 'Popular Movies'},
        {name: 'upcoming', title: 'Upcoming'},
        {name: 'toprated', title: 'Top Rated Movies'},
        {name: 'released', title: 'Week Releases'}
    ];

    constructor() {}

    ngAfterViewInit() {
        $('#movies_list').tabs();
    }
}

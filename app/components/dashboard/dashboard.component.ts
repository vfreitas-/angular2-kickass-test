import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {MovieService} from '../../services/movie.service';

@Component({
	selector: 'dashboard',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/components/dashboard/dashboard.html'
})
export class DashboardComponent implements OnInit {
	public movies: any;
	public loading = true;

	constructor(
		private _movieService: MovieService
	) {}

	ngOnInit() {
		this._movieService.getPopularMovies()
			.then(result => {
				this.movies = result.json().results;
				this.loading = false;
			});
	}

	getMovieImage(poster_path: string) {
		return this._movieService.renderImage(poster_path);
	}
}

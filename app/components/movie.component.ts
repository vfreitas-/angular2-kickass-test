import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {MovieService} from '../services/movie.service';

@Component({
	selector: 'movie',
	template: `
		<div *ngIf="movie">
			<h3>{{ movie.title }}</h3>
		</div>
	`
})
export class MovieComponent implements OnInit {
	public movie: any;

	constructor(
		private _movieService: MovieService,
		private _routeParams: RouteParams,
		private _router: Router
	) {}

	ngOnInit() {
		let id = +this._routeParams.get('id');

		this._movieService.getMovie(id)
			.then(movie => {
				this.movie = movie.json();
			})
			.catch(err => {
				this._router.navigate(['Dashboard']);
			});
	}

}

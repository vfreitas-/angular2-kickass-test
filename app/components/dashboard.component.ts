import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {MovieService} from '../services/movie.service';

@Component({
	selector: 'dashboard',
	directives: [ROUTER_DIRECTIVES],
	template: `
		<h2>Dashboard</h2>

		<div class="row">
			<div *ngIf="loading" class="col s8 offset-s2">
				<div class="progress">
					<div class="indeterminate"></div>
				</div>
			</div>
			<div class="col s4 m3 l2" *ngFor="#movie of movies">
				<div class="card blue">
					<a [routerLink]="['Movie', {id: movie.id}]">
						<div class="card-image">
							<img [src]="getMovieImage(movie.poster_path)"/>
							<span class="card-title txt-blue"></span>
						</div>
					</a>
				</div>
			</div>
		</div>
	`
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
		return this._movieService.renderPoster(poster_path);
	}
}

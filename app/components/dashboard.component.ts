import {Component, OnInit} from 'angular2/core';

import {MovieService} from '../services/movie.service';

@Component({
	selector: 'dashboard',
	template: `
		<h2>Dashboard</h2>

		<div class="row">
			<div *ngIf="loading" class="col s8 offset-s2">
				<div class="progress">
					<div class="indeterminate"></div>
				</div>
			</div>
			<div class="col s3" *ngFor="#movie of movies">
				<div class="card blue">
					<a>
						<div class="card-image">
							<img [src]="getMovieImage(movie.poster_path)"/>
							<span class="card-title txt-blue">
								{{ movie.title }}
							</span>
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
		let path = this._movieService.renderPoster(poster_path);
		console.log(path);
		return path;
	}
}

import {Component, OnInit} from 'angular2/core';

import {MovieService} from '../services/kickass.service';

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
			<div class="col s4" *ngFor="#movie of movies">
				<div class="card blue">
					<a>
						<div class="card-image">
							<img/>
							<span class="card-title">{{ movie.movie.title }}</span>
						</div>
						<div>

						</div>
					</a>
				</div>
			</div>
		</div>
	`
})
export class DashboardComponent implements OnInit {
	public movies = [];
	public loading = true;

	constructor(
		private _kickassService: MovieService
	) {}

	ngOnInit() {
		//this._kickassService.getMovies('movies')
		this._kickassService.getTrendMovies()
			.then(res => {
				this.movies = res.json();



				this.loading = false;
			});
	}
}

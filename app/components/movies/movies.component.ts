import {Component, OnInit, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {MovieService} from '../../services/tmdb/movie.service';

@Component({
	selector: 'movies',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/components/movies/movies.html'
})
export class MoviesComponent implements OnInit {

	public movies: Array<any>;
	public loading = true;

	private _type = 'popular';

	private _types = {
		'popular': 'popular',
		'upcoming': 'upcoming',
		'toprated': 'top_rated',
		'released': 'now_playing'
	};

	@Input() set listType(type: string) {
		this._type = this._types[type] !== undefined
			? this._types[type]
			: this._type;
	}

	constructor(
		private _movieService: MovieService
	) {}

	ngOnInit() {
		this._movieService.getMovies(this._type)
			.then(result => {
				this.movies = result.json().results;
				this.loading = false;
			});
	}
}

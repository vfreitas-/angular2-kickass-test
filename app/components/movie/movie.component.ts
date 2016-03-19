import {Component, ElementRef, OnInit, AfterViewInit} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {MovieService} from '../../services/movie.service';
import {BreadcrumbComponent} from '../breadcrumb/breadcrumb.component';

declare var $:any;

@Component({
	selector: 'movie',
	directives: [ROUTER_DIRECTIVES, BreadcrumbComponent],
	templateUrl: 'app/components/movie/movie.html'
})
export class MovieComponent implements OnInit, AfterViewInit {
	public movie: any;

	public loading = true;

	constructor(
		private _movieService: MovieService,
		private _routeParams: RouteParams,
		private _router: Router,
		private el: ElementRef
	) {}

	ngAfterViewInit() {
		console.log($(this.el.nativeElement));
	}

	ngOnInit() {
		let id = +this._routeParams.get('id');

		this._movieService.getMovie(id, 'images,videos')
			.then(movie => {
				this.movie = movie.json();
				this.loading = false;
			})
			.catch(err => {
				this._router.navigate(['Dashboard']);
			});
	}

	getMovieImage(poster_path: string) {
		return this._movieService.renderImage(poster_path);
	}

	getMovieBackdrop(poster_path: string) {
		return this._movieService.renderImage(poster_path, 'backdrop');
	}

	getMovieVideo(key: string) {
		return this._movieService.renderVideo(key);
	}

}

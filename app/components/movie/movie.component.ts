import {Component, ElementRef, OnInit, AfterViewChecked} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {MovieService} from '../../services/movie.service';
import {BreadcrumbComponent} from '../breadcrumb/breadcrumb.component';

import {DateHelper} from '../../helpers/date';

declare var $:any;

@Component({
	selector: 'movie',
	directives: [ROUTER_DIRECTIVES, BreadcrumbComponent],
	templateUrl: 'app/components/movie/movie.html'
})
export class MovieComponent implements OnInit, AfterViewChecked {
	public movie: any;

	public loading = true;

	public tabsLoaded = false;

	constructor(
		private _movieService: MovieService,
		private _routeParams: RouteParams,
		private _router: Router,
		private _dateHelper: DateHelper,
		private el: ElementRef
	) {}

	ngAfterViewChecked() {
		if( $(this.el.nativeElement).find('#tabs-movies').children().length > 0 &&
		!this.tabsLoaded) {
			console.log($(this.el.nativeElement).find('#tabs-movies').children());

			$(this.el.nativeElement).find('#tabs-movies').tabs();
			this.tabsLoaded = true;
		}
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

	parseDate(date: any) {
		return this._dateHelper.parseRobust(date);
	}

	parseRunTime(date: any) {
		return this._dateHelper.parseMinToHour(date);
	}

}

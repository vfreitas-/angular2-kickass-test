import {Injectable, OnInit} from 'angular2/core';
import {Http, Headers, RequestOptions, URLSearchParams} from 'angular2/http';

import {BaseService} from './base.service';

@Injectable()
export class MovieService extends BaseService {

	constructor(http: Http) {
		super(http);
	}

	getMovies(type: string) {
		return this._http.get(`${this.url}/movie/${type}`, this.req_options)
			.toPromise();
	}

	getMovie(id: number, append: string = '') {
		if(append) this.req_options.search.set('append_to_response', append);

		return this._http.get(`${this.url}/movie/${id}`, this.req_options)
			.toPromise();
	}

	getMovieImages(id: number) {
		return this._http.get(`${this.url}/movie/${id}/images`, this.req_options)
			.toPromise();
	}

	getMovieVideos(id: number) {
		return this._http.get(`${this.url}/movie/${id}/videos`, this.req_options)
			.toPromise();
	}

	renderImage(path: string, type: string = 'poster', size: number = null) {
		let key, poster;

		switch(type) {
			case 'poster':
				key = size || 3;
				poster = this.config.images.poster_sizes[key];
				break;

			case 'backdrop':
				key = size || 0;
				poster = this.config.images.backdrop_sizes[key];
				break;
		}
		return `${this.config.images.base_url}${poster}${path}`;
	}

	renderVideo(key: string) {
		return `https://www.youtube.com/embed/${key}`;
	}
}

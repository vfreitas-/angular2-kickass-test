import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {BaseService} from './base.service';

@Injectable()
export class MovieService extends BaseService {

	protected resource = 'movie';

	constructor(http: Http) {
		super(http);
	}

	getMovies(type: string) {
		return this._http.get(`${this.getEndpoint()}/${type}`, this.req_options)
			.toPromise();
	}

	getMovie(id: number, append: string = '') {
		if(append) this.req_options.search.set('append_to_response', append);

		return this._http.get(`${this.getEndpoint()}/${id}`, this.req_options)
			.toPromise();
	}

	getMovieImages(id: number) {
		return this._http.get(`${this.getEndpoint()}/${id}/images`, this.req_options)
			.toPromise();
	}

	getMovieVideos(id: number) {
		return this._http.get(`${this.getEndpoint()}/${id}/videos`, this.req_options)
			.toPromise();
	}
}

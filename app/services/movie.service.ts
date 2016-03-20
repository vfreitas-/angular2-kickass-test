import {Injectable, OnInit} from 'angular2/core';
import {Http, Headers, RequestOptions, URLSearchParams} from 'angular2/http';


@Injectable()
export class MovieService {

	public url = 'http://api.themoviedb.org/3';
	public apiKey = 'f289cf4b2326937e41e44f35b992964e';
	public req_options: RequestOptions;
	public params: URLSearchParams;

	public config = {
		base_url: '',
		poster_sizes: [],
		backdrop_sizes: []
	};

	constructor(private _http: Http) {
		this.params = new URLSearchParams();
		this.params.set('api_key', this.apiKey);

		let headers = new Headers({});

		this.req_options = new RequestOptions({
			headers: headers,
			search: this.params
		});

		this.getConfiguration();
	}

	getConfiguration() {
		this._http.get(`${this.url}/configuration`, this.req_options)
			.toPromise()
			.then(result => {
				let data = result.json();
				this.config.base_url = data.images.base_url;
				this.config.poster_sizes = data.images.poster_sizes;
				this.config.backdrop_sizes = data.images.backdrop_sizes;
			});
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
				poster = this.config.poster_sizes[key];
				break;

			case 'backdrop':
				key = size || 0;
				poster = this.config.backdrop_sizes[key];
				break;
		}
		return `${this.config.base_url}${poster}${path}`;
	}

	renderVideo(key: string) {
		return `https://www.youtube.com/embed/${key}`;
	}
}

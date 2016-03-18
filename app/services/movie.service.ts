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
		poster_sizes: []
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
			});
	}

	getPopularMovies() {
		return this._http.get(`${this.url}/movie/popular`, this.req_options)
			.toPromise();
	}

	getMovie(id: number) {
		return this._http.get(`${this.url}/movie/${id}`, this.req_options)
			.toPromise();
	}

	renderPoster(poster_path: string) {
		return `${this.config.base_url}${this.config.poster_sizes[3]}${poster_path}`;
	}
}

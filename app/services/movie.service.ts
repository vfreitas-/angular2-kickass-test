import {Injectable, OnInit} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';


@Injectable()
export class MovieService implements OnInit {

	public url = 'http://localhost:3000';
	public apiKey = 'f289cf4b2326937e41e44f35b992964e';
	public req_options: RequestOptions;
	public config = [];

	constructor(private _http: Http) {
		let headers = new Headers({
			'Content-Type': 'application/json',
			'trakt-api-version': 2,
			'trakt-api-key': '04ec3baf430aa0db990b5c57bc1b8f47af24b3e299c3c4d66e467a1d1201fe31'
		});

		this.req_options = new RequestOptions({
			headers: headers
		});
	}

	ngOnInit() {

	}

	getMovies(category: string, query: string = null) {
		let url = `${this.url}/search/${category}`;

		if(query) url += `/${query}`;

		return this._http.get(url)
			.toPromise();
	}

	getTrendMovies() {
		return this._http.get(
			'https://api-v2launch.trakt.tv/movies/trending',
			this.req_options
		).toPromise();
	}
}

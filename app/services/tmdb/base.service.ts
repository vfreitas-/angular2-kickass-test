import {Http, Headers, RequestOptions, URLSearchParams} from 'angular2/http';

import {env} from '../../env';

export abstract class BaseService {

 	protected url = env.TMDB_URL;
	protected apiKey = env.TMDB_KEY;
	protected req_options: RequestOptions;
	protected params: URLSearchParams;

	protected config = {
		images: {}
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
				this.config.images = data.images;
			});
	}

}

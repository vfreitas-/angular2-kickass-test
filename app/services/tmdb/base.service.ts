import {Http, Headers, RequestOptions, URLSearchParams} from 'angular2/http';

import {env} from '../../env';

export abstract class BaseService {

    protected baseUrl: string = env.TMDB_URL;
    protected resource: string;

    protected apiKey: string = env.TMDB_KEY;

    protected req_options: RequestOptions;
    protected params: URLSearchParams;

    constructor(protected _http: Http) {
        this.params = new URLSearchParams();
        this.params.set('api_key', this.apiKey);

        let headers = new Headers({});

        this.req_options = new RequestOptions({
            headers: headers,
            search: this.params
        });
    }

    getEndpoint() {
        return `${this.baseUrl}/${this.resource}`;
    }

}

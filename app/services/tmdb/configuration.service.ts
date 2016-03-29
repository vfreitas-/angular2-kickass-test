import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {BaseService} from './base.service';

@Injectable()
export class ConfigurationService extends BaseService {

	protected resource = 'configuration';

	constructor(http: Http) {
		super(http);
	}

	getConfiguration() {
		this._http.get(`${this.getEndpoint()}`, this.req_options)
			.toPromise()
			.then(result => {
				let data = result.json();
				//this.config.images = data.images;
			});
	}
}

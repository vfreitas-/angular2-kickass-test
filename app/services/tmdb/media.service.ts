import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {BaseService} from './base.service';

@Injectable()
export class MediaService extends BaseService {

	constructor(http: Http) {
		super(http);
	}

	renderImage(path: string, type: string = 'poster', size: number = null) {
		let key, poster;

		if(!path) return '/assets/images/No_Poster.png';

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

import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {env} from '../../env';

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
            poster = env.TMDB_POSTER_SIZES[key];
            break;

            case 'backdrop':
            key = size || 0;
            poster = env.TMDB_BACKDROP_SIZES[key];
            break;
        }
        return `${env.TMDB_IMAGE_URL}${poster}${path}`;
    }

    renderVideo(key: string) {
        return `https://www.youtube.com/embed/${key}`;
    }
}

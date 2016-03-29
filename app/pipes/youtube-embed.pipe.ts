import {Pipe, PipeTransform} from 'angular2/core';

import {MediaService} from '../services/tmdb/media.service';

@Pipe({
    name: 'youtube'
})
export class YoutubeEmbedPipe implements PipeTransform {

    constructor(
        private _mediaService: MediaService
    ) {}

    transform(value: any, args: any[]) : any {
        return this._mediaService.renderVideo(value);
    }
}

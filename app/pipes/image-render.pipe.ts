import {Pipe, PipeTransform} from 'angular2/core';

import {MediaService} from '../services/tmdb/media.service';

@Pipe({
    name: 'imageRender'
})
export class ImageRenderPipe implements PipeTransform {

    constructor(
        private _mediaService: MediaService
    ) {}

    transform(value: any, args: any[]) : any {
        let type = args[0] || 'poster';

        return this._mediaService.renderImage(value, type);
    }
}

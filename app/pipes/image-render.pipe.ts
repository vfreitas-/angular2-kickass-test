import {Pipe, PipeTransform} from 'angular2/core';

import {MovieService} from '../services/movie.service';

@Pipe({
	name: 'imageRender'
})
export class ImageRenderPipe implements PipeTransform {

	constructor(
		private _movieService: MovieService
	) {}

	transform(value: any, args: any[]) : any {
		let type = args[0] || 'poster';

		return this._movieService.renderImage(value, type);
	}
}

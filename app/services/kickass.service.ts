import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class KickassService {

	public katUrl = 'https://kat.cr';
	movies = [];

	constructor(private _http: Http) {}

	getMovies() {
		let url = `${this.katUrl}/json.php?q=category:movies`;

		return this._http.get(url)
			.map(res => res.json());
	}
}

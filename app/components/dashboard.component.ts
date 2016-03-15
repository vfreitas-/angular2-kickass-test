import {Component, OnInit} from 'angular2/core';

import {KickassService} from '../services/kickass.service';

@Component({
	selector: 'dashboard',
	template: `
		<h2>Dashboard</h2>
	`
})
export class DashboardComponent implements OnInit {
	public movies = [];

	constructor(
		private _kickassService: KickassService
	) {}

	ngOnInit() {
		this._kickassService.getMovies()
			.subscribe(results => {
				console.log(results);
			});
	}
}

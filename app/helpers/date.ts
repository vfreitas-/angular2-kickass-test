import {Injectable} from 'angular2/core';

declare var moment:any;

@Injectable()
export class DateHelper {

	constructor() {}

	parseRobust(date: string) {
		return moment(date).format('d, MMMM YYYY');
	}

	parseMinToHour(minutes: number) {
		return moment.duration(minutes, "minutes").humanize();
	}

}

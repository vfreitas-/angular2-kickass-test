import {Pipe, PipeTransform} from 'angular2/core';

declare var moment:any;

@Pipe({
	name: 'moment'
})
export class MomentPipe implements PipeTransform {

	transform(value: any, args: any[]) : any {
		let func = `parse${args[0]}`;
		if(typeof this[func] === 'function')
			return this[func](value);

		return value;
	}

	parseRobust(date: string) {
		return moment(date).format('d MMMM YYYY');
	}

	parseYear(date: string) {
		return moment(date).format('YYYY');
	}

	parseMinToHour(minutes: number) {
		let temp = moment.duration(minutes, "minutes");
		return `${temp.hours()}h ${temp.minutes()}min`;
	}

}

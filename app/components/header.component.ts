import {Component} from 'angular2/core';

@Component({
	selector: 'header',
	template: `
		<nav>
			<div class="nav-wrapper teal">
				<a href class="brand-logo left">Movies</a>
				<ul id="nav-mobile" class="right">
					<li><a href >Heroes</a></li>
				</ul>
			</div>
		</nav>
	`
})
export class HeaderComponent {

}

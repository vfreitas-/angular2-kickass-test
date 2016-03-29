import {Component} from 'angular2/core';

@Component({
	selector: 'header',
	template: `
        <nav>
            <div class="nav-wrapper teal" style="padding: 0 1rem;">
                <a href class="brand-logo left">Movies</a>
                <ul class="right">
                    <li>
                        <a>
                            <i class="material-icons">search</i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
	`
})
export class HeaderComponent {

}

import { Component, input } from '@angular/core';

@Component({
	selector: 'app-social-btn',
	standalone: true,
	imports: [],
	templateUrl: './social-btn.component.html',
	styleUrl: './social-btn.component.scss',
})
export class SocialBtnComponent {
	btnContent = input.required<string>();
	btnLink = input.required<string>();
}

import { Component } from '@angular/core';
import { SocialBtnComponent } from '../../shared/components/social-btn/social-btn.component';

@Component({
	selector: 'app-user-card',
	standalone: true,
	imports: [SocialBtnComponent],
	templateUrl: './user-card.component.html',
	styleUrl: './user-card.component.scss',
})
export class UserCardComponent {}

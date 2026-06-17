import { Component, inject } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { UserResponse } from '../../data/models/user.model';
import { SocialBtnComponent } from '../../shared/components/social-btn/social-btn.component';

@Component({
	selector: 'app-user-card',
	standalone: true,
	imports: [SocialBtnComponent],
	templateUrl: './user-card.component.html',
	styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
	userService = inject(UserService);
	userData!: UserResponse;
	ngOnInit(): void {
		this.renderUserData();
	}

	renderUserData() {
		this.userService.getUserData().subscribe({
			next: (data) => {
				this.userData = data;
				console.log(this.userData);
			},
			error: (error) => {
				console.error('Error fetching user data:', error);
			},
		});
	}
}

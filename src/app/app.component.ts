import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { UserService } from './core/services/user.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	title = 'social-links';
	userService = inject(UserService);
	private themeService = inject(ThemeService);
	ngOnInit(): void {
		this.userService.getUserData().subscribe({
			next: (data) => {
				console.log(data);
			},
			error: (error) => {
				console.error('Error fetching user data:', error);
			},
		});
	}
}

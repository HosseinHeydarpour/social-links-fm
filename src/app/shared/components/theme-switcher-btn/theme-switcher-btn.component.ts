import { Component, inject, OnInit } from '@angular/core';
import { Theme, ThemeService } from '../../../core/services/theme.service';

@Component({
	selector: 'app-theme-switcher-btn',
	standalone: true,
	imports: [],
	templateUrl: './theme-switcher-btn.component.html',
	styleUrl: './theme-switcher-btn.component.scss',
})
export class ThemeSwitcherBtnComponent implements OnInit {
	themeService = inject(ThemeService);

	ngOnInit(): void {}

	getTheme(): Theme {
		return this.themeService.getInitialTheme();
	}

	toggleTheme() {
		this.themeService.toggleTheme();
	}
}

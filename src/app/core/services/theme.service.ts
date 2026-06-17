import { effect, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	themeSignal = signal<Theme>('light');

	constructor() {
		const initialTheme = this.getInitialTheme();
		this.themeSignal.set(initialTheme);
		effect(() => {
			const currentTheme = this.themeSignal();
			const root = window.document.documentElement;

			if (currentTheme === 'dark') {
				root.classList.add('dark');
			} else {
				root.classList.remove('dark');
			}

			localStorage.setItem('theme', currentTheme);
		});
	}

	toggleTheme(): void {
		this.themeSignal.update((currentTheme) => {
			const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';

			return newTheme;
		});
	}

	setTheme(theme: Theme): void {
		this.themeSignal.set(theme);
	}

	getInitialTheme(): Theme {
		const savedTheme = localStorage.getItem('theme') as Theme;

		if (savedTheme) return savedTheme;

		// Fallback to system preference if no user choice is saved
		const userPrefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		return userPrefersDark ? 'dark' : 'light';
	}
}

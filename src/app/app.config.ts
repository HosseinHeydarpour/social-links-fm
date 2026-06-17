import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { APP_CONFIG } from './core/config/app-config.token';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		{ provide: APP_CONFIG, useValue: environment },
		provideHttpClient(),
	],
};

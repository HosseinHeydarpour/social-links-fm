import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { APP_CONFIG } from '../config/app-config.token';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private appConfig = inject(APP_CONFIG);
	private http = inject(HttpClient);

	constructor() {}

	getUserData() {
		return this.http.get<any>(`${this.appConfig.apiUrl}/`).pipe(
			map((response) => {
				return response.results[0];
			})
		);
	}
}

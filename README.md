# Frontend Mentor - Social Links Profile Solution (Dynamic Angular Edition)

This is a highly optimized, feature-rich solution to the Social Links Profile challenge on Frontend Mentor.

Unlike traditional static implementations, this version is engineered as a modern Angular Single Page Application (SPA) featuring dynamic profile loading, reactive state management, clean theme-switching, and a highly modular architectural layout.

## Table of Contents

- Overview
- The Challenge
- Key Features
- Links
- Project Architecture
- My Process
- Built With
- What I Learned
- Continued Development
- Author
- Acknowledgments

---

## Overview

### The Challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page.
- Navigate the profile card comfortably on mobile, tablet, and desktop viewports.
- Experience clean keyboard accessibility (visible outline on tab focus).
- **Extra Mile:** Switch smoothly between Dark and Light modes.
- **Extra Mile:** View real-time, dynamic profile data fetched asynchronously from an API.

### Key Features

- **Dynamic Data Integration:** Powered by the Random User Generator API (`https://randomuser.me/api`) to supply authentic mock data dynamically.
- **Reactive Theme Engine:** A centralized service handles real-time theme transitioning (Dark/Light themes) without page reloads.
- **Enterprise Directory Structure:** Designed according to industry-standard modular patterns, cleanly segregating core logic, features, shared presentation elements, and data models.
- **Standalone Components:** Utilizes the latest Angular paradigms, omitting bulky NgModules for faster bootstrap times and explicit tree-shakable dependencies.

### Links

- **Solution URL:** View Solution on Frontend Mentor
- **Live Site URL:** View Live Demo on Vercel

---

## Project Architecture

The codebase is organized following a strict, scalable directory structure:

```text
src/
├── app/
│   ├── core/
│   │   ├── config/
│   │   │   └── app-config.token.ts
│   │   └── services/
│   │       ├── theme.service.ts
│   │       └── user.service.ts
│   │
│   ├── data/
│   │   └── models/
│   │       └── user.model.ts
│   │
│   ├── features/
│   │   └── user-card/
│   │
│   ├── shared/
│   │   └── components/
│   │       ├── social-btn/
│   │       └── theme-switcher-btn/
│   │
│   ├── app.component.*
│   ├── app.config.ts
│   └── app.routes.ts
│
├── environments/
│   ├── environment.development.ts
│   └── environment.ts
└── styles.scss
```

---

## My Process

### Built With

- Angular (Standalone Architecture)
- RxJS Streams
- SCSS (Sassy CSS)
- Angular HttpClient
- TypeScript

---

## What I Learned

### 1. Decoupled Theme Service Engine

By abstracting the theme swapping logic into `ThemeService`, both the ThemeSwitcherBtn and the rest of the application react seamlessly to visual shifts.

### 2. Clean Custom Dependency Injection (DI) Tokens

```ts
// src/app/core/config/app-config.token.ts

import { InjectionToken } from '@angular/core';

export interface AppConfig {
	apiUrl: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
```

This token is provided at the application configuration level:

```ts
// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { environment } from '../environments/environment';
import { APP_CONFIG } from './core/config/app-config.token';

export const appConfig: ApplicationConfig = {
	providers: [
		{ provide: APP_CONFIG, useValue: { apiUrl: environment.apiUrl } },
	],
};
```

### 3. Strict Type Safety with Domain Interfaces

```ts
// src/app/data/models/user.model.ts

export interface UserProfile {
	name: { first: string; last: string };
	location: { city: string; country: string };
	email: string;
	picture: { large: string; medium: string };
}
```

---

## Continued Development

Moving forward, I intend to build on this base by:

- Evaluating Angular Signals as a replacement for some RxJS subscription patterns.
- Adding customizable fallback profiles when third-party APIs become unavailable.
- Increasing automated test coverage across feature and shared components.

---

## Author

- Frontend Mentor — `@yourusername`
- GitHub — **Hossein Heydarpour**

---

## Acknowledgments

A special shoutout to Frontend Mentor for providing the clean aesthetic designs and specifications that made constructing this modernized Angular layout possible.

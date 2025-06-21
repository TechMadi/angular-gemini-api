import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { provideAuth, getAuth } from "@angular/fire/auth";

import { routes } from "./app.routes";
import { evironment } from "../environments/environment.dev";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideRouter(routes),
		provideFirebaseApp(() => initializeApp(evironment.firebaseConfig)),
		provideFirestore(() => getFirestore()),
		provideAuth(() => getAuth()),
		provideHttpClient(),
	],
};

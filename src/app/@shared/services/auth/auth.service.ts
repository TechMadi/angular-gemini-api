import { inject, Injectable } from "@angular/core";
import {
	Auth,
	onAuthStateChanged,
	signInAnonymously,
	signOut,
	User,
} from "@angular/fire/auth";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	fireAuth = inject(Auth);

	loggedInUser: User | null = null;

	constructor() {
		onAuthStateChanged(this.fireAuth, (user) => {
			this.loggedInUser = user;
		});
	}

	async anonSignIn() {
		const res = await signInAnonymously(this.fireAuth);
	}

	async logout() {
		await signOut(this.fireAuth);
	}

	get isLoggedIn(): boolean {
		return !!this.fireAuth.currentUser;
	}

	get uid(): string | null {
		return this.fireAuth.currentUser?.uid ?? null;
	}
}

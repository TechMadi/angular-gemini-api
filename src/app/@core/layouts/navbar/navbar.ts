import { Component, inject } from "@angular/core";
import { AuthService } from "../../../@shared/services/auth/auth.service";
import { TalkService } from "../../../@shared/services/talks/talks.service";

@Component({
	selector: "app-navbar",
	imports: [],
	templateUrl: "./navbar.html",
	styleUrl: "./navbar.scss",
})
export class Navbar {
	authService = inject(AuthService);
	talkService = inject(TalkService);
	signIn() {
		this.authService.anonSignIn();
	}

	signOut() {
		this.authService.logout();
	}

	addNewTalk() {
		// this.talkService.addTalk()
	}
}

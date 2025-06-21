import { Component, inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TalkService } from "./@shared/services/talks/talks.service";
import { DatePipe, JsonPipe } from "@angular/common";
import { AuthService } from "./@shared/services/auth/auth.service";

import { Timestamp } from "@angular/fire/firestore";
import { Navbar } from "./@core/layouts/navbar/navbar";
import { Footer } from "./@core/layouts/footer/footer";

export interface ITalk {
	title: string;
	speaker: string;
	date: Timestamp;
	description: string;
	category: "NGRX" | "TANSACK" | "SIGNALS" | "Schematics";
}
@Component({
	selector: "app-root",
	imports: [Navbar, DatePipe, Navbar, Footer],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App implements OnInit {
	protected title = "gemini-api";
	talks: ITalk[] = [];

	talkService = inject(TalkService);

	async ngOnInit(): Promise<void> {
		this.talks = await this.talkService.getTalks();
	}

	// async getTalkSummary(talk: any) {
	// 	try {
	// 		await this.talkService.getSummary(
	// 			this.authService.loggedInUser as User,
	// 			talk,
	// 		);
	// 	} catch (err: any) {
	// 		console.log(err.message);
	// 	} finally {
	// 	}
	// }

	addTalk() {
		const newTalk: ITalk = {
			title: "Angular Schematics for Modular Architecture",
			speaker: "Frank Sitawa",
			description:
				"I will cover the basics of Angular Schematics and how you can use it to generate modules when you are using Modular Architecture",
			category: "Schematics",
			date: Timestamp.now(),
		};
		this.talkService.addTalk(newTalk);
	}
}

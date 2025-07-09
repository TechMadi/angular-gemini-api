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
	imports: [Navbar, DatePipe, Navbar, Footer, RouterOutlet],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App {
	protected title = "gemini-api";

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
}

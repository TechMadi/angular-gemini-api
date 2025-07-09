import { Component, inject, OnInit } from "@angular/core";
import { Timestamp } from "@angular/fire/firestore";
import { TalkService } from "../../@shared/services/talks/talks.service";
import { ITalk } from "../../app";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
	selector: "app-all-talks",
	imports: [DatePipe],
	templateUrl: "./all-talks.html",
	styleUrl: "./all-talks.scss",
})
export class AllTalks implements OnInit {
	talks: ITalk[] = [];

	talkService = inject(TalkService);
	router = inject(Router);

	async ngOnInit(): Promise<void> {
		this.talks = await this.talkService.getTalks();
	}

	getSummary(id: string) {
		this.router.navigate(["/summary", id]);
	}
}

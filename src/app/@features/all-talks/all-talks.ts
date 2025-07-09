import { Component, inject, OnInit } from "@angular/core";
import { Timestamp } from "@angular/fire/firestore";
import { TalkService } from "../../@shared/services/talks/talks.service";
import { ITalk } from "../../app";
import { DatePipe } from "@angular/common";

@Component({
	selector: "app-all-talks",
	imports: [DatePipe],
	templateUrl: "./all-talks.html",
	styleUrl: "./all-talks.scss",
})
export class AllTalks implements OnInit {
	talks: ITalk[] = [];

	talkService = inject(TalkService);

	async ngOnInit(): Promise<void> {
		this.talks = await this.talkService.getTalks();
	}

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

import { Component, inject, signal } from "@angular/core";
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";

import { JsonPipe } from "@angular/common";
import { ITalk } from "../../app";
import { Timestamp } from "@angular/fire/firestore";
import { TalkService } from "../../@shared/services/talks/talks.service";
import { Router } from "@angular/router";
@Component({
	selector: "app-add-talk",
	imports: [ReactiveFormsModule, JsonPipe],
	templateUrl: "./add-talk.html",
	styleUrl: "./add-talk.scss",
})
export class AddTalk {
	talkService = inject(TalkService);
	router = inject(Router);
	addTalkForm = new FormGroup({
		title: new FormControl("", [Validators.required]),
		slides: new FormControl(""),
		speaker: new FormControl("", [Validators.required]),
		category: new FormControl("NGRX"),
		description: new FormControl(""),
	});

	async submitTalk() {
		let newTalk: ITalk = {
			image: new URL(`https://picsum.photos/id/1/1080`).href,
			date: Timestamp.now(),
			title: this.addTalkForm.value.title!,
			slides: new URL(this.addTalkForm.value.slides!).href,
			speaker: this.addTalkForm.value.speaker ?? "",
			category: this.addTalkForm.value.category ?? "",
			description: this.addTalkForm.value.description ?? "",
		};

		await this.talkService.addTalk(newTalk).then((data) => {
			this.router.navigate(["/"]);
		});
	}
}

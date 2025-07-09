import { Component } from "@angular/core";
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";

import { JsonPipe } from "@angular/common";

@Component({
	selector: "app-add-talk",
	imports: [ReactiveFormsModule, JsonPipe],
	templateUrl: "./add-talk.html",
	styleUrl: "./add-talk.scss",
})
export class AddTalk {
	//  title: string;
	// speaker: string;
	// date: Timestamp;
	// description: string;
	// category: "NGRX" | "TANSACK" | "SIGNALS" | "Schematics";

	addTalkForm = new FormGroup({
		title: new FormControl("", [Validators.required]),
		slides: new FormControl(""),
		speaker: new FormControl("", [Validators.required]),
		category: new FormControl(["NGRX"]),
		description: new FormControl(""),
	});

	submitTalk() {
		console.log(this.addTalkForm.value);
	}
}

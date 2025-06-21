import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { getIdToken, User } from "@angular/fire/auth";
import {
	addDoc,
	collection,
	collectionData,
	Firestore,
} from "@angular/fire/firestore";
import { firstValueFrom, Observable } from "rxjs";
import { ITalk } from "../../../app";

@Injectable({
	providedIn: "root",
})
export class TalkService {
	firestore = inject(Firestore);
	http = inject(HttpClient);
	private geminiUrl =
		"https://us-central1-angular-gemini-da067.cloudfunctions.net/ext-firestore-multimodal-genai-generateOnCall";
	constructor() {}

	async getTalks(): Promise<any[]> {
		const talkRef = collection(this.firestore, "talks");
		return firstValueFrom(collectionData(talkRef, { idField: "id" }));
	}

	async addTalk(talk: ITalk) {
		let updateTalk = {
			...talk,
		};
		const talkRef = collection(this.firestore, "talks");
		return addDoc(talkRef, updateTalk);
	}

	async getSummary(user: User, talk: any) {
		const idToken = user ? await getIdToken(user) : "";

		console.log(talk);

		const body = {
			contents: [
				{
					role: "user",
					parts: [
						{
							prompt: `Give an overview of the talk titled "${talk.title}" in 3 bullet points. If possible, return some links.`,
						},
					],
				},
			],
		};

		const response = await firstValueFrom(
			this.http.post(this.geminiUrl, body, {
				headers: {
					Authorization: `Bearer ${idToken}`,
					"Content-Type": "application/json",
				},
			}),
		);

		console.log(response);
	}
}

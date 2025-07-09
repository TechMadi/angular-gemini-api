import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { getIdToken, User } from "@angular/fire/auth";
import {
	addDoc,
	collection,
	collectionData,
	Firestore,
	doc,
	getDoc,
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

	async getTalkById(id: string): Promise<ITalk | undefined> {
		const talkDocRef = doc(this.firestore, `talks/${id}`);
		const talkSnap = await getDoc(talkDocRef);
		return talkSnap.exists()
			? ({ id: talkSnap.id, ...talkSnap.data() } as ITalk)
			: undefined;
	}
}

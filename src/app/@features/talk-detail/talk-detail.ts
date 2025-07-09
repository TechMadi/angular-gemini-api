import {
	Component,
	inject,
	input,
	OnInit,
	Signal,
	signal,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ITalk } from "../../app";
import { TalkService } from "../../@shared/services/talks/talks.service";
import { DatePipe } from "@angular/common";

@Component({
	selector: "app-talk-detail",
	imports: [DatePipe],
	templateUrl: "./talk-detail.html",
	styleUrl: "./talk-detail.scss",
})
export class TalkDetail implements OnInit {
	activatedRoute = inject(ActivatedRoute);
	imgId: number = 0;
	talk = signal<ITalk | null>(null);
	talkService = inject(TalkService);

	async ngOnInit() {
		this.imgId = Math.floor(Math.random() + 16);
		let id = this.activatedRoute.snapshot.paramMap.get("id");

		await this.getTalk(id as string);
	}

	async getTalk(id: string) {
		const res = await this.talkService.getTalkById(id);
		this.talk.set(res ?? null);
		console.log(this.talk());
	}
}

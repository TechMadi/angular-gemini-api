import { Routes } from "@angular/router";
import { App } from "./app";
import { AddTalk } from "./@features/add-talk/add-talk";
import { AllTalks } from "./@features/all-talks/all-talks";
import { TalkDetail } from "./@features/talk-detail/talk-detail";

export const routes: Routes = [
	{
		path: "",
		component: AllTalks,
	},
	{
		path: "add-talk",
		component: AddTalk,
	},
	{
		path: "summary/:id",
		component: TalkDetail,
	},
];

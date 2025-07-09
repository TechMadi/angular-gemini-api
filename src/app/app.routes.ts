import { Routes } from "@angular/router";
import { App } from "./app";
import { AddTalk } from "./@features/add-talk/add-talk";
import { AllTalks } from "./@features/all-talks/all-talks";

export const routes: Routes = [
	{
		path: "",
		component: AllTalks,
	},
	{
		path: "add-talk",
		component: AddTalk,
	},
];

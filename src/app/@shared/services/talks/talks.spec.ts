import { TestBed } from "@angular/core/testing";

import { TalkService } from "./talks.service";

describe("Session", () => {
	let service: TalkService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TalkService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});

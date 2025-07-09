import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTalks } from './all-talks';

describe('AllTalks', () => {
  let component: AllTalks;
  let fixture: ComponentFixture<AllTalks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTalks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTalks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

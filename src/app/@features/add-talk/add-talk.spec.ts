import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTalk } from './add-talk';

describe('AddTalk', () => {
  let component: AddTalk;
  let fixture: ComponentFixture<AddTalk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTalk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTalk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

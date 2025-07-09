import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkDetail } from './talk-detail';

describe('TalkDetail', () => {
  let component: TalkDetail;
  let fixture: ComponentFixture<TalkDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

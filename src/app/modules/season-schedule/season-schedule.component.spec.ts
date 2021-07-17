import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonScheduleComponent } from './season-schedule.component';

describe('SeasonScheduleComponent', () => {
  let component: SeasonScheduleComponent;
  let fixture: ComponentFixture<SeasonScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

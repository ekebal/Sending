import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderCompletedAccountComponent } from './reminder-completed-account.component';

describe('ReminderCompletedAccountComponent', () => {
  let component: ReminderCompletedAccountComponent;
  let fixture: ComponentFixture<ReminderCompletedAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderCompletedAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderCompletedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

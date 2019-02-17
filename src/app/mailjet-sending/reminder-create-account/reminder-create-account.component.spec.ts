import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderCreateAccountComponent } from './reminder-create-account.component';

describe('ReminderCreateAccountComponent', () => {
  let component: ReminderCreateAccountComponent;
  let fixture: ComponentFixture<ReminderCreateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderCreateAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

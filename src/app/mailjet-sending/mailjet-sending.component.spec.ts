import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailjetSendingComponent } from './mailjet-sending.component';

describe('MailjetSendingComponent', () => {
  let component: MailjetSendingComponent;
  let fixture: ComponentFixture<MailjetSendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailjetSendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailjetSendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

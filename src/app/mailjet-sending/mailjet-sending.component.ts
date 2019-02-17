import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-mailjet-sending',
  templateUrl: './mailjet-sending.component.html',
  styleUrls: ['./mailjet-sending.component.css']
})
export class MailjetSendingComponent implements OnInit {
  title = ':MailJet';
  ValidationIsOn = false ;
  ReminderCreateAccountIsOn = false ;
  ReminderCompletedAccountIsOn = false ;
  NextRentalsOn = false ;
  ResetPasswordIsOn = false ;
  ValidationManuelleIsOn = false ;
  DriverLicenceIsOn = false ;
  WelcomeToKirrkIsOn = false ;
 TripsIsDoneIsOn = false;
  SendSMSIsOn = false ;
  IDNotAccepted = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      
  }

  // convenience getter for easy access to form fields

  onSubmit() {
     
  }
}
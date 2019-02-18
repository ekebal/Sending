import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingMailService } from '../.././Services/SendingMailService';
import { ReminderCompletedAccount } from '../.././Models/ReminderCompletedAccount';
import { sendRequest } from 'selenium-webdriver/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reminder-completed-account',
  templateUrl: './reminder-completed-account.component.html',
  styleUrls: ['./reminder-completed-account.component.css']
})
export class ReminderCompletedAccountComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  service : SendingMailService;
  reminderCompletedAccount : ReminderCompletedAccount;
  validationService :any;
  date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: true,
        format: 'dd/MM/yyyy h:mm',
        defaultOpen: false
    }

  constructor(private formBuilder: FormBuilder,private sendingMailService : SendingMailService
) {
    this.reminderCompletedAccount =new  ReminderCompletedAccount();
    this.service = sendingMailService;
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      startagencyname: ['', [Validators.required]],
      returnagencyname: ['', [Validators.required]],
      startdate: ['', [Validators.required]],
      returndate: ['', [Validators.required]],
      creationcode: ['', [Validators.required]],
      Bcc: ['', Validators.required],



      
  });
//this.validationCompt.firstName = this.registerForm.value;
console.log(this.registerForm);
console.log(this.registerForm);

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm);
    var datePipe = new DatePipe('en-US');
      this.submitted = true;
      this.reminderCompletedAccount.FirstName = this.registerForm.value.firstName;
      this.reminderCompletedAccount.LastName = this.registerForm.value.lastName;
      this.reminderCompletedAccount.Email = this.registerForm.value.email;
      this.reminderCompletedAccount.Name = this.registerForm.value.firstName;
      this.reminderCompletedAccount.Bcc = this.registerForm.value.Bcc;

      this.reminderCompletedAccount.StartAgencyName = this.registerForm.value.startagencyname;
      this.reminderCompletedAccount.ReturnAgencyName = this.registerForm.value.returnagencyname;
      this.reminderCompletedAccount.Start = datePipe.transform(this.registerForm.value.startdate,'dd/MM/yyyy à HH:mm');
      this.reminderCompletedAccount.Return = datePipe.transform(this.registerForm.value.returndate,'dd/MM/yyyy à HH:mm');
      console.log(this.reminderCompletedAccount);
      // stop here if form is invalid
      this.service.ReminderCompletedAccount(this.reminderCompletedAccount).subscribe((res)=>{
        (result: Response) => {
         
          console.log(result.json())
       
      }});
      if (this.registerForm.invalid) {
          return;
      }
    
  }
}
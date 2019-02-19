import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingMailService } from '../.././Services/SendingMailService';
import { ReminderCreateAccount } from '../.././Models/ReminderCreateAccount';
import { sendRequest } from 'selenium-webdriver/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reminder-create-account',
  templateUrl: './reminder-create-account.component.html',
  styleUrls: ['./reminder-create-account.component.css']
})
export class ReminderCreateAccountComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  service : SendingMailService;
  reminderCreateAccount : ReminderCreateAccount;
  validationService :any;
  dateStart: Date = new Date();
  settingsstart = {
      bigBanner: true,
      timePicker: true,
      format: 'dd/MM/yyyy h:mm',
      defaultOpen: false
  }
  datereturn: Date = new Date();
  settingsreturn = {
      bigBanner: true,
      timePicker: true,
      format: 'dd/MM/yyyy h:mm',
      defaultOpen: false
  };
  sendActivate : boolean;

  constructor(private formBuilder: FormBuilder,private sendingMailService : SendingMailService
) {
    this.reminderCreateAccount =new  ReminderCreateAccount();
    this.service = sendingMailService;
    this.sendActivate =false;
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      startagencyname: ['', [Validators.required]],
      returnagencyname: ['', [Validators.required]],
      startdate: ['', [Validators.required]],
      returndate: ['', [Validators.required]],
      creationcode: ['', [Validators.required]],
      Bcc: ['',Validators.email],
      email: ['', [Validators.required, Validators.email]],

  });
      this.onChanges();

  }
  onChanges(): void {
    this.registerForm.valueChanges.subscribe(val => {
      if(this.registerForm.valid)
      {
          this.sendActivate = true;
      }
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }
  else{
    console.log(this.registerForm);
    var datePipe = new DatePipe('en-US');
      this.submitted = true;
      this.reminderCreateAccount.FirstName = this.registerForm.value.firstName;
      this.reminderCreateAccount.LastName = this.registerForm.value.lastName;
      this.reminderCreateAccount.Name = this.registerForm.value.firstName;
      this.reminderCreateAccount.CreationCode = this.registerForm.value.creationcode;
      this.reminderCreateAccount.StartAgencyName = this.registerForm.value.startagencyname;
      this.reminderCreateAccount.ReturnAgencyName = this.registerForm.value.returnagencyname;
      this.reminderCreateAccount.Start = datePipe.transform(this.registerForm.value.startdate,'dd/MM/yyyy à HH:mm');
      this.reminderCreateAccount.Return = datePipe.transform(this.registerForm.value.returndate,'dd/MM/yyyy à HH:mm');
      this.reminderCreateAccount.Bcc = this.registerForm.value.Bcc;
      this.reminderCreateAccount.Email = this.registerForm.value.email;


      console.log(this.reminderCreateAccount);
      // stop here if form is invalid
      this.service.ReminderCreateAccount(this.reminderCreateAccount).subscribe((res)=>{
        (result: Response) => {
         
          console.log(result.json())
       
      }});
    
  }
}
}
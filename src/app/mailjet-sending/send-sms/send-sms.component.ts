import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingMailService } from '../.././Services/SendingMailService';
import { SendSMS,SmsType } from '../.././Models/SendSMS';
import { sendRequest } from 'selenium-webdriver/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.css']
})
export class SendSMSComponent implements OnInit {

  
  registerForm: FormGroup;
  submitted = false;
  service : SendingMailService;
  sendSMS : SendSMS;
  smstype: SmsType;
  validationService :any;
  isOffline : boolean;
  date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: true,
        format: 'dd/MM/yyyy h:mm',
        defaultOpen: false
    }
  options :string [];
  constructor(private formBuilder: FormBuilder,private sendingMailService : SendingMailService
) {
    this.sendSMS =new  SendSMS();
    this.service = sendingMailService;
   }
   parseValue(value : string) {
    this.smstype = SmsType[value];
    //this.isOffline = this.smstype == SmsType.LASTDAY;
  }
  ngOnInit() {
      this.options = Object.keys(SmsType).filter(f => isNaN(Number(f)));
      this.registerForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      number: ['', [Validators.required]],
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
      this.sendSMS.To = this.registerForm.value.number;
      this.sendSMS.smsType = this.smstype;
      console.log(this.sendSMS);
      // stop here if form is invalid
     this.service.SMSSend(this.sendSMS).subscribe((res)=>{
        (result: Response) => {
         
          console.log(result.json())
       
      }});
      if (this.registerForm.invalid) {
          return;
  }
    
    
  }
}
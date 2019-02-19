import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingMailService } from '../.././Services/SendingMailService';
import { WelcomToKirrk } from '../.././Models/WelcomToKirrk';
import { sendRequest } from 'selenium-webdriver/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-welcome-to-kirrk',
  templateUrl: './welcome-to-kirrk.component.html',
  styleUrls: ['./welcome-to-kirrk.component.css']
})
export class WelcomeToKirrkComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  service : SendingMailService;
  welcomToKirrk : WelcomToKirrk;
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
    this.welcomToKirrk =new  WelcomToKirrk();
    this.service = sendingMailService;
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      Bcc: ['',Validators.email],

  

  });
//this.validationCompt.firstName = this.registerForm.value;
      console.log(this.registerForm);
      console.log(this.registerForm);

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
      this.welcomToKirrk.Email = this.registerForm.value.email;
      this.welcomToKirrk.UserFirstName = this.registerForm.value.firstName;
      this.welcomToKirrk.Name = this.registerForm.value.name;
      this.welcomToKirrk.Bcc = this.registerForm.value.Bcc;

       
      console.log(this.welcomToKirrk);
      // stop here if form is invalid
      this.service.WelcomToKirrk(this.welcomToKirrk).subscribe((res)=>{
        (result: Response) => {
         
          console.log(result.json())
       
      }});
      if (this.registerForm.invalid) {
          return;
      }
    }
  }
}
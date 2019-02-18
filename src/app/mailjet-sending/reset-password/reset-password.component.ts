import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingMailService } from '../.././Services/SendingMailService';
import { ResetPassword } from '../.././Models/ResetPassword';
import { sendRequest } from 'selenium-webdriver/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  service : SendingMailService;
  resetPassword : ResetPassword;
  validationService :any;

  constructor(private formBuilder: FormBuilder,private sendingMailService : SendingMailService) {
    this.resetPassword = new ResetPassword();
    //this.validationService = this.service.resetPasswordeSend 
    this.service = sendingMailService;
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      userPasswordResetLink: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Bcc: ['', Validators.required],

  });
//this.resetPassword.firstName = this.registerForm.value;
console.log(this.registerForm);
console.log(this.registerForm);

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm);
      this.submitted = true;
      this.resetPassword.UserFirstName = this.registerForm.value.firstName;
      this.resetPassword.UserPasswordResetLink = this.registerForm.value.userPasswordResetLink;
      this.resetPassword.Email = this.registerForm.value.email;
      this.resetPassword.Name = this.registerForm.value.firstName;
      this.resetPassword.Bcc = this.registerForm.value.Bcc;

      console.log(this.resetPassword);
      // stop here if form is invalid
      this.service.ResetPassword(this.resetPassword).subscribe((res)=>{
        (result: Response) => {
         
          console.log(result.json())
       
      }});
      if (this.registerForm.invalid) {
          return;
      }
  }
}
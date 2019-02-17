import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingMailService } from '../.././Services/SendingMailService';
import { ValidationAccount } from '../.././Models/ValidationAccount';
import { sendRequest } from 'selenium-webdriver/http';



@Component({
  selector: 'app-validation-compte',
  templateUrl: './validation-compte.component.html',
  styleUrls: ['./validation-compte.component.css']
})
export class ValidationCompteComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  service : SendingMailService;
  validationCompt : ValidationAccount;
  validationService :any;

  constructor(private formBuilder: FormBuilder,private sendingMailService : SendingMailService) {
    this.validationCompt = new ValidationAccount();
    //this.validationService = this.service.ValidationCompteSend 
    this.service = sendingMailService;
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]]
  });
//this.validationCompt.firstName = this.registerForm.value;
console.log(this.registerForm);
console.log(this.registerForm);

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm);
      this.submitted = true;
      this.validationCompt.firstName = this.registerForm.value.firstName;
      this.validationCompt.lastName = this.registerForm.value.lastName;
      this.validationCompt.email = this.registerForm.value.email;
      this.validationCompt.Name = this.registerForm.value.name;
      console.log(this.validationCompt);
      // stop here if form is invalid
      this.service.ValidationCompteSend(this.validationCompt).subscribe((res)=>{
        (result: Response) => {
         
          console.log(result.json())
       
      }});
      if (this.registerForm.invalid) {
          return;
      }
  }
}
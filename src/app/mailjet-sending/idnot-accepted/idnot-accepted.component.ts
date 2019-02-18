import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingMailService } from '../.././Services/SendingMailService';
import { IDNotAccepted } from '../.././Models/IDNotAccepted';
import { sendRequest } from 'selenium-webdriver/http';

@Component({
  selector: 'app-idnot-accepted',
  templateUrl: './idnot-accepted.component.html',
  styleUrls: ['./idnot-accepted.component.css']
})
export class IDNotAcceptedComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  service : SendingMailService;
  iDNotAccepted : IDNotAccepted;
  validationService :any;

  constructor(private formBuilder: FormBuilder,private sendingMailService : SendingMailService) {
    this.iDNotAccepted = new IDNotAccepted();
    //this.validationService = this.service.ValidationCompteSend 
    this.service = sendingMailService;
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
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
      this.iDNotAccepted.FirstName = this.registerForm.value.firstName;
      this.iDNotAccepted.LastName = this.registerForm.value.lastName;
      this.iDNotAccepted.Email = this.registerForm.value.email;
      this.iDNotAccepted.Name = this.registerForm.value.firstName;
      console.log(this.iDNotAccepted);
      // stop here if form is invalid
      this.service.IDNotAccepted(this.iDNotAccepted).subscribe((res)=>{
        (result: Response) => {
         
          console.log(result.json())
       
      }});
      if (this.registerForm.invalid) {
          return;
      }
  }
}
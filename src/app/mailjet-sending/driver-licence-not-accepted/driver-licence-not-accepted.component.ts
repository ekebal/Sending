import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingMailService } from '../.././Services/SendingMailService';
import { DriverLicenceNotAccepted } from '../.././Models/DriverLicenceNotAccepted';
import { sendRequest } from 'selenium-webdriver/http';


@Component({
  selector: 'app-driver-licence-not-accepted',
  templateUrl: './driver-licence-not-accepted.component.html',
  styleUrls: ['./driver-licence-not-accepted.component.css']
})
export class DriverLicenceNotAcceptedComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  service : SendingMailService;
  driverLicenceNotAccepted : DriverLicenceNotAccepted;
  validationService :any;

  constructor(private formBuilder: FormBuilder,private sendingMailService : SendingMailService) {
    this.driverLicenceNotAccepted = new DriverLicenceNotAccepted();
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
      this.driverLicenceNotAccepted.FirstName = this.registerForm.value.firstName;
      this.driverLicenceNotAccepted.LastName = this.registerForm.value.lastName;
      this.driverLicenceNotAccepted.Email = this.registerForm.value.email;
      this.driverLicenceNotAccepted.Name = this.registerForm.value.firstName;
      console.log(this.driverLicenceNotAccepted);
      // stop here if form is invalid
      this.service.DriverLicenceNotAccepted(this.driverLicenceNotAccepted).subscribe((res)=>{
        (result: Response) => {
         
          console.log(result.json())
       
      }});
      if (this.registerForm.invalid) {
          return;
      }
  }
}
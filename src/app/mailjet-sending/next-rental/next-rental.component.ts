import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingMailService } from '../.././Services/SendingMailService';
import { NextRental } from '../.././Models/NextRental';
import { sendRequest } from 'selenium-webdriver/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-next-rental',
  templateUrl: './next-rental.component.html',
  styleUrls: ['./next-rental.component.css']
})
export class NextRentalComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  service : SendingMailService;
  nextRental : NextRental;
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
    this.nextRental =new  NextRental();
    this.service = sendingMailService;
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      rentalstartagency: ['', [Validators.required]],
      rentalstartdate: ['', [Validators.required]],
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
      this.nextRental.Email = this.registerForm.value.email;
      this.nextRental.UserFirstName = this.registerForm.value.firstName;
      this.nextRental.Name = this.registerForm.value.name;
      this.nextRental.Bcc = this.registerForm.value.Bcc;

      this.nextRental.RentalStartAgency = this.registerForm.value.rentalstartagency;
      this.nextRental.RentalStartDate = datePipe.transform(this.registerForm.value.rentalstartdate,'dd/MM/yyyy');
      this.nextRental.RentalStartTime = datePipe.transform(this.registerForm.value.rentalstartdate,'HH:mm');
      console.log(this.nextRental);
      // stop here if form is invalid
      this.service.NextRental(this.nextRental).subscribe((res)=>{
        (result: Response) => {
         
          console.log(result.json())
       
      }});
      if (this.registerForm.invalid) {
          return;
      }
    
  }
}
}
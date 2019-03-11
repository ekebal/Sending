import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingMailService } from '../.././Services/SendingMailService';
import { FirstRental } from '../.././Models/FirstRental';
import { sendRequest } from 'selenium-webdriver/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-first-rental',
  templateUrl: './first-rental.component.html',
  styleUrls: ['./first-rental.component.css']
})
export class FirstRentalComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  service : SendingMailService;
  firstRental : FirstRental;
  validationService :any;
  dateStart: Date = new Date();
  datereturn: Date = new Date();

    settings = {
        bigBanner: true,
        timePicker: true,
        format: 'dd/MM/yyyy h:mm',
        defaultOpen: false
    }

  constructor(private formBuilder: FormBuilder,private sendingMailService : SendingMailService
) {
    this.firstRental =new  FirstRental();
    this.service = sendingMailService;
   }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      rentalreference: ['', [Validators.required]],
      rentalagencyname: ['', [Validators.required]],
      rentalcode: ['', [Validators.required]],
      startdate: ['', [Validators.required]],
      returndate: ['', [Validators.required]],
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

      this.firstRental.Email = this.registerForm.value.email;
      this.firstRental.Name = this.registerForm.value.name;
      this.firstRental.RentalReference = this.registerForm.value.rentalreference;
      this.firstRental.Bcc = this.registerForm.value.Bcc;

      this.firstRental.RentalAgencyName = this.registerForm.value.rentalagencyname;
      this.firstRental.RentalStartDate = datePipe.transform(this.registerForm.value.startdate,'dd/MM/yyyy à HH:mm');
      this.firstRental.RentalEndDate = datePipe.transform(this.registerForm.value.returndate,'dd/MM/yyyy à HH:mm');
      this.firstRental.RentalCode = this.registerForm.value.rentalcode;
      console.log(this.firstRental);
      // stop here if form is invalid
      this.service.FirstRental(this.firstRental).subscribe((res)=>{
        (result: Response) => {
         
          console.log(result.json())
       
      }});
      if (this.registerForm.invalid) {
          return;
      }
    }}
}
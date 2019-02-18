import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingMailService } from '../.././Services/SendingMailService';
import { TripIsDone } from '../.././Models/TripIsDone';
import { sendRequest } from 'selenium-webdriver/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-trips-is-done',
  templateUrl: './trips-is-done.component.html',
  styleUrls: ['./trips-is-done.component.css']
})
export class TripsIsDoneComponent implements OnInit {

 
  registerForm: FormGroup;
  submitted = false;
  service : SendingMailService;
  tripIsDone : TripIsDone;
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
    this.tripIsDone =new  TripIsDone();
    this.service = sendingMailService;
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      lastName: ['', [Validators.required]],
      rentalagencystartname: ['', [Validators.required]],
      rentalagencyreturnname: ['', [Validators.required]],     
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
      this.tripIsDone.Email = this.registerForm.value.email;
      this.tripIsDone.FirstName = this.registerForm.value.firstName;
      this.tripIsDone.LastName = this.registerForm.value.lastName;
      this.tripIsDone.Name = this.registerForm.value.firstName;
      this.tripIsDone.AgencyStartName = this.registerForm.value.rentalagencystartname;
      this.tripIsDone.AgencyReturnName = this.registerForm.value.rentalagencyreturnname;

      console.log(this.tripIsDone);
      // stop here if form is invalid
      this.service.TripIsDone(this.tripIsDone).subscribe((res)=>{
        (result: Response) => {
         
          console.log(result.json())
       
      }});
      if (this.registerForm.invalid) {
          return;
      }
    
  }
}
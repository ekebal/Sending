import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingMailService } from '../.././Services/SendingMailService';
import { ValidationManuel } from '../.././Models/ValidationManuel';
import { sendRequest } from 'selenium-webdriver/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-validation-manuel',
  templateUrl: './validation-manuel.component.html',
  styleUrls: ['./validation-manuel.component.css']
})
export class ValidationManuelComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  service : SendingMailService;
  validationManuel : ValidationManuel;
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
    this.validationManuel =new  ValidationManuel();
    this.service = sendingMailService;
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      imgstate: ['', [Validators.required]],
      imgback: ['', [Validators.required]],     
      imgselfie: ['', [Validators.required]],     
      imgfront: ['', [Validators.required]],     

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
      this.validationManuel.Email = this.registerForm.value.email;
      this.validationManuel.FirstName = this.registerForm.value.firstName;
      this.validationManuel.LastName = this.registerForm.value.lastName;
      this.validationManuel.Name = this.registerForm.value.name;
      this.validationManuel.ImgFront = this.registerForm.value.imgfront;
      this.validationManuel.ImgBack = this.registerForm.value.imgback;
      this.validationManuel.ImgSelfie = this.registerForm.value.imgselfie;
      this.validationManuel.ImgState = this.registerForm.value.imgstate;
       
      console.log(this.validationManuel);
      // stop here if form is invalid
      this.service.ValidationManuel(this.validationManuel).subscribe((res)=>{
        (result: Response) => {
         
          console.log(result.json())
       
      }});
      if (this.registerForm.invalid) {
          return;
      }
    
  }
}
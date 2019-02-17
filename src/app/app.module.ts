import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpHandler } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailjetSendingComponent } from './mailjet-sending/mailjet-sending.component';
import { ValidationCompteComponent } from './mailjet-sending/validation-compte/validation-compte.component';
import { SendingMailService } from './Services/SendingMailService';
import { HttpClientModule } from '@angular/common/http';
import { ReminderCreateAccountComponent } from './mailjet-sending/reminder-create-account/reminder-create-account.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { DatePipe } from '@angular/common';
import { ReminderCompletedAccountComponent } from './mailjet-sending/reminder-completed-account/reminder-completed-account.component';
import { NextRentalComponent } from './mailjet-sending/next-rental/next-rental.component';
import { ResetPasswordComponent } from './mailjet-sending/reset-password/reset-password.component';
import { ValidationManuelComponent } from './mailjet-sending/validation-manuel/validation-manuel.component';
import { WelcomeToKirrkComponent } from './mailjet-sending/welcome-to-kirrk/welcome-to-kirrk.component';
import { IDNotAcceptedComponent } from './mailjet-sending/idnot-accepted/idnot-accepted.component';
import { TripsIsDoneComponent } from './mailjet-sending/trips-is-done/trips-is-done.component';
import { FirstRentalComponent } from './mailjet-sending/first-rental/first-rental.component';
import { DriverLicenceNotAcceptedComponent } from './mailjet-sending/driver-licence-not-accepted/driver-licence-not-accepted.component';
import { SendSMSComponent } from './mailjet-sending/send-sms/send-sms.component'



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularDateTimePickerModule
    
  ],
  declarations: [
    AppComponent,
    MailjetSendingComponent,
    ValidationCompteComponent,
    ReminderCreateAccountComponent,
    ReminderCompletedAccountComponent,
    NextRentalComponent,
    ResetPasswordComponent,
    ValidationManuelComponent,
    WelcomeToKirrkComponent,
    IDNotAcceptedComponent,
    TripsIsDoneComponent,
    FirstRentalComponent,
    DriverLicenceNotAcceptedComponent,
    SendSMSComponent,
    
  ],
  
  providers: [ SendingMailService,HttpClient,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

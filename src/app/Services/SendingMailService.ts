import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValidationAccount } from '../Models/ValidationAccount';
import { ReminderCreateAccount } from '../Models/ReminderCreateAccount';
import { FirstRental } from '../Models/FirstRental';
import { NextRental } from '../Models/NextRental';
import { DriverLicenceNotAccepted } from '../Models/DriverLicenceNotAccepted';
import { CarAssigned } from '../Models/CarAssigned';
import { IDNotAccepted } from '../Models/IDNotAccepted';
import { ReminderCompletedAccount } from '../Models/ReminderCompletedAccount';
import { ResetPassword } from '../Models/ResetPassword';
import { TripIsDone } from '../Models/TripIsDone';
import { ValidationManuel } from '../Models/ValidationManuel';
import { WelcomToKirrk } from '../Models/WelcomToKirrk';
import { SendSMS } from '../Models/SendSMS';

@Injectable()
export class SendingMailService {
    private Url = "https://dev-kirrk-webapp.azurewebsites.net";
  

    constructor(private httpClient: HttpClient) {
    }
   
    public ValidationCompteSend(validationAccount : ValidationAccount)
    {
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/validationCompteSendMail/`,validationAccount);
    }

    public ReminderCreateAccount(reminderCreateAccount : ReminderCreateAccount)
    {
        console.log(reminderCreateAccount);
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/reminderCreatedAccount/`,reminderCreateAccount);
    }
    
    public FirstRental(firstRental : FirstRental)
    {
        console.log(firstRental);
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/firstRentalSendMailEvent/`,firstRental);
    }
     
    public NextRental(nextRental : NextRental)
    {
        console.log(nextRental);
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/NextRentalSendMailEvent/`,nextRental);
    }
    public CarAssignedSend(carAssigned : CarAssigned)
    {
        console.log(carAssigned);
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/CarAssignedSendMailEvent/`,carAssigned);
    }
    public ResetPassword(resetPassword : ResetPassword)
    {
        console.log(resetPassword);
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/restPasswordSendMailEvent/`,resetPassword);
    }
    public ValidationManuel(validationManuel : ValidationManuel)
    {
        console.log(validationManuel);
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/validationManuelDemandee/`,validationManuel);
    }
    public DriverLicenceNotAccepted(driverLicenceNotAccepted : DriverLicenceNotAccepted)
    {
        console.log(driverLicenceNotAccepted);
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/driverLicenceNotAccepted/`,driverLicenceNotAccepted);
    }
    public ReminderCompletedAccount(reminderCompletedAccount : ReminderCompletedAccount)
    {
        console.log(reminderCompletedAccount);
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/reminderCompletedAccount/`,reminderCompletedAccount);
    }

    public IDNotAccepted(iDNotAccepted : IDNotAccepted)
    {
        console.log(iDNotAccepted);
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/iDNotAccepted/`,iDNotAccepted);
    }
    public WelcomToKirrk(welcomToKirrk : WelcomToKirrk)
    {
        console.log(welcomToKirrk);
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/welcomToKirrk/`,welcomToKirrk);
    }
    public TripIsDone(tripIsDone : TripIsDone)
    {
        console.log(tripIsDone);
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/tripIsDone/`,tripIsDone);
    }
    public SMSSend(sendSMS : SendSMS)
    {
        console.log(sendSMS);
        console.log("ok");
        return this.httpClient.post(`${this.Url}/api/sending/sendSMS/`,sendSMS);
    }
}
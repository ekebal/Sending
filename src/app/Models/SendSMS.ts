export enum SmsType {
    LAS_TDAY,
    END_RENTAL_GOOD_4,
    END_RENTAL_BADE_3,
    END_RENTAl,
}
export class SendSMS
{
    To:string;
    smsType:SmsType;
}
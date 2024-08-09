export interface EmailMessageModel {
    id: string;
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    data: string;
}

export interface SendEmailBolletinModel {
    email: string;
}
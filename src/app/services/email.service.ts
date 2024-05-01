import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'https://asanzaws.azurewebsites.net/api/v1/Email/send-contact-email';
  //private apiUrl = 'https://localhost:7084/api/v1/Email/send-contact-email';


  constructor(private http: HttpClient) { }

  sendEmail(data: any) {
    return this.http.post(this.apiUrl, data);
  }

}

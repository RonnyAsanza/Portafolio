import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://localhost:7185/api/Email/';
  //private apiUrl = 'https://l6opn7urig732v6vph2cpal36e0dpsnb.lambda-url.us-east-1.on.aws/api/Email/';
  constructor(private http: HttpClient) { }

  sendEmail(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  getEmailData() {
    return this.http.get(this.apiUrl);
  }

  sendEmailBulletin(data: any) {
    let url = this.apiUrl + "send-email-bolletin" 
    return this.http.post(url, data);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  //private apiUrl = 'https://localhost:7084/api/v1/Email/send-contact-email';
  //private apiUrlGetEmailData = 'https://asanzawebsolutions.azurewebsites.net/api/v1/Email/';

  private apiUrl = 'https://asanzawebsolutions.azurewebsites.net/api/v1/Email/send-contact-email';
  private apiUrlGetEmailData = 'https://localhost:7084/api/v1/Email/';
  
  constructor(private http: HttpClient) { }

  sendEmail(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, data, { headers: headers });
  }

  getEmailData() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer `
    });

    return this.http.get(this.apiUrlGetEmailData, { headers: headers });
  }
  
}

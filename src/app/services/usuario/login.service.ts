import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private apiUrl = 'https://localhost:7185/api/User/login';
  //private apiUrl = 'https://l6opn7urig732v6vph2cpal36e0dpsnb.lambda-url.us-east-1.on.aws/api/User/login/';

  constructor(private http: HttpClient) { }

  login(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, data, { headers: headers });
  }
}

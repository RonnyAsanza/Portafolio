import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://localhost:7084/api/v1/User/login';
  //private apiUrl = 'https://asanzawebsolutions.azurewebsites.net/api/v1/User/login';

  constructor(private http: HttpClient) { }

  login(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, data, { headers: headers });
  }
}

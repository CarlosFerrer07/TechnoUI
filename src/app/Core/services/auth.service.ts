import { environment } from './../../../environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getToken(authRequest: any) {
    this.http
      .post<any>(this.API_URL + '/Api/Auth/Login', authRequest)
      .subscribe((res: any) => {
        console.log('La respuesta', res);
      });
  }
}

import { environment } from './../../../environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  doLogin(authRequest: any) {
    return this.http
      .post<any>(this.API_URL + '/Api/Auth/Login', authRequest)
      .pipe(
        tap((res: any) => {
          const token = res.token;
          localStorage.setItem('token', JSON.stringify(token));
        })
      );
  }
}

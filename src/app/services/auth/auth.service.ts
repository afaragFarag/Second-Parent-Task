import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { AuthUrls } from 'src/app/configs/api-urls.config';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { Login } from 'src/app/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;
  constructor(private http: HttpClient) {}

  login(model: Login) {
    return this.http.post(AuthUrls.login, model).pipe(
      map((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          console.log(response.token);
        }
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  Logout() {
    localStorage.removeItem('token');
  }
}

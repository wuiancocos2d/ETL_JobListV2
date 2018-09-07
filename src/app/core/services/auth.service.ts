import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {observable, Observable, throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {MessageService} from './message.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'})
};

interface AuthMsg {
  Result: string;
  SID: string;
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginUrl = '../api/login.ashx';
  isLoggedIn = false;
  redirectUrl: string;
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {

  }

  loginAuth(loginUser: string) {
    return this.http.post(this.loginUrl, loginUser, httpOptions)
      .pipe(
        tap(
          (res: AuthMsg) => {
            if (res['SID']) {
              this.isLoggedIn = true;
              this.setSIDCookieWithTime(res['SID']);
            } else {
              this.messageService.clear();
              this.messageService.add(res['Result']);
            }
          }
        ),
        catchError(this.handleErrors)
      );
  }

  private handleErrors(error: HttpErrorResponse) {
    this.messageService.add(JSON.stringify(error));
    console.log(1);
    return throwError(error);
  }

  getCookieItem(item: string) {
    const match = document.cookie.match(new RegExp('(^| )' + item + '=([^;]+)'));
    if (match) {
      return match[2];
    }
  }
  setSIDCookieWithTime(sid: string) {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + 1000 * 60 * 35;
    now.setTime(expireTime);
    document.cookie = 'SID=' + sid + ';expires=' + now.toLocaleTimeString() + ';path=/';
    console.log(now.toLocaleTimeString());
  }
}

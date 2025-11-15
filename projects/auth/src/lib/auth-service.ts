import { inject, Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { AuthEndPoint } from './enums/AuthEndPoint';
import { AuthAdaptation } from './adaptor/auth-adaptation';
@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthAPI {
  private readonly httpClient = inject(HttpClient);
  private readonly authAdaptation = inject(AuthAdaptation);
  login(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.LOGIN, data)
      .pipe(map(res => this.authAdaptation.adapt(res)), catchError(err => of(err)))
  }
  register(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.REGISTER, data)
      .pipe(map(res => this.authAdaptation.adapt(res)), catchError(err => of(err)))
  }
  changePassword(data: any): Observable<any> {
    return this.httpClient.patch(AuthEndPoint.CHANEPASSWORD, data)
      .pipe(map(res => this.authAdaptation.adapt(res)), catchError(err => of(err)))

  }
  deleteMyaccount(data: any): Observable<any> {
    return this.httpClient.delete(AuthEndPoint.DELETEMYACCOUNT)
      .pipe(map(res => this.authAdaptation.adapt(res)), catchError(err => of(err)))
  }
  getLoggedUserInfo(data: any): Observable<any> {
    return this.httpClient.get(AuthEndPoint.GETLOGGEDUSERINFO)
      .pipe(map(res => this.authAdaptation.adapt(res)), catchError(err => of(err)))
  }
 editProfile(data: any): Observable<any> {
    return this.httpClient.put(AuthEndPoint.EDITPROFILE,data)
    .pipe(map(res => this.authAdaptation.adapt(res)), catchError(err => of(err)))
  }
 logOut(data: any): Observable<any> {
    return this.httpClient.get(AuthEndPoint.LOGOUT)
    .pipe(map(res => this.authAdaptation.adapt(res)), catchError(err => of(err)))
  }
  forgotPassword(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.FORGETPASSWORD, data)
      .pipe(map(res => this.authAdaptation.adapt(res)), catchError(err => of(err)))
  }
  verifyResetCode(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.VERIFYRESETCODE, data)
      .pipe(map(res => this.authAdaptation.adapt(res)), catchError(err => of(err)))
  }
  resetPassword(data: any): Observable<any> {
    return this.httpClient.put(AuthEndPoint.VERIFYRESETCODE, data)
      .pipe(map(res => this.authAdaptation.adapt(res)), catchError(err => of(err)))
  }
}

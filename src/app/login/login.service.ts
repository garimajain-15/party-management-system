import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ILogin } from './login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedInUserDetail = new Subject<ILogin>;
  public loggedInUserDetail$ = this.loggedInUserDetail.asObservable();

  constructor(public router: Router) { }

  getLoggedInUserDetail(loggedInUserDetails: ILogin) {
    this.router.navigate(['dashboard']);
    this.loggedInUserDetail.next(loggedInUserDetails);
  }
}

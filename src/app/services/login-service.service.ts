import { Injectable } from '@angular/core';
import { ILoginData } from '../interfaces/interfaces';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  //dummy token; we need to get token from the server
  private loginToken: string = 'wqwsd112sdasdas12dasd'

  constructor(private lcStorage: LocalStorageService) { }

  logIn(login: ILoginData):string {
    if(login.login === 'test' && login.password === 'test') {
      this.lcStorage.storeToken(this.loginToken)
      return 'success'
    } 
    return 'fail'
  }

  logOut():void {
    this.lcStorage.clearToken()
  }

  isLoggedIn():boolean {
    return this.lcStorage.getToken() === this.loginToken
  }
  
}

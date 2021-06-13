import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getToken():any {
    return localStorage.getItem('token')
  }

  storeToken(data:string):void {
    localStorage.setItem('token', data)
  }

  clearToken():void {
    localStorage.removeItem('token')
  }

}

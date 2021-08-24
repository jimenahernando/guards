import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(){
    if (localStorage.getItem('logueado')){
      return true;
    } else {
      return false;
    }
  };
}

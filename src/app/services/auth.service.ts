import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router:Router) { }

  login(uname: string , pswd: string){
    if ( uname === 'a' && pswd === '1'){
      return 200;
    } else {
      return 403;
    }
  }
  logout() {
    this.router.navigate(['login']);
  }
}

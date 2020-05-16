import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// import { Sesion } from '../models/sesion';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  api: string = environment.apiUrl;
  statusSesion: any = false
  user: any;

  constructor(private http: HttpClient, private router: Router) { }

  // Http Options
  // httpOptions = {
  //   headers: new HttpHeaders({
  //   'Content-Type': 'application/json'
  //   })
  // }

  setSesion(s: any):Observable<any> {
    return this.http.post<any>( this.api + '/login', s, { withCredentials: true })
  }

  clear(): void {
    localStorage.clear();
  }

  isAuthenticated() {
    if(localStorage.getItem('session')==null) {
      this.statusSesion = false;
    } else {
      this.statusSesion = true;
    }
    return this.statusSesion; 
  }

  getRole() {
    if(localStorage.getItem('session')==null) {
      this.statusSesion = false;
    } else {
      this.user = JSON.parse(localStorage.getItem('session'))
      return this.user.user.role;
    }
  }

  setLocalSesion(s:any): void {
    localStorage.setItem('session', s);
    this.statusSesion = true;
    this.router.navigate(['platform']);
  }

  // setLoggedIn(login: any) {
  //   this.isLoggedIn = true;
  //   this.userLogged = login;
  //   localStorage.setItem('currentLogin', JSON.stringify(login));
  // }

  logout(): void {
    this.clear();
    this.statusSesion = false;
    this.router.navigate(['login']);
  }

}

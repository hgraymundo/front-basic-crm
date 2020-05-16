import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  api: string = environment.apiUrl;

  constructor( private http: HttpClient, private router: Router ) { }

  getProfile():Observable<any> {
    return this.http.get<any>( this.api + '/profile', { withCredentials: true })
  }
}

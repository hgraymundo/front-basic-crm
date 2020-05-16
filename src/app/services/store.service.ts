import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  url: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getstore():Observable<any> {
    return this.http.get<any>( this.url + '/store');
  }
  getstoreById(id: any):Observable<any> {
    return this.http.get<any>( this.url + '/store/' + id);
  }
  setstore(data: any):Observable<any> {
    return this.http.post( this.url + '/store', data);
  }
  deletestore(id: any):Observable<any> {
    return this.http.delete( this.url + '/store/'+ id);
  }
  updatestore(id:any, data: any):Observable<any> {
    return this.http.put( this.url + '/store/' + id, data);
  }
}

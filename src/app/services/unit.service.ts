import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  url: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getUnits():Observable<any> {
    return this.http.get<any>( this.url + '/unit');
  }
  getUnitById(id: any):Observable<any> {
    return this.http.get<any>( this.url + '/unit/' + id);
  }
  setUnit(data: any):Observable<any> {
    return this.http.post( this.url + '/unit', data);
  }
  deleteUnit(id: any):Observable<any> {
    return this.http.delete( this.url + '/unit/'+ id);
  }
  updateUnit(id:any, data: any):Observable<any> {
    return this.http.put( this.url + '/unit/' + id, data);
  }
}

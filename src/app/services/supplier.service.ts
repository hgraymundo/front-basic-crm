import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getSupplier():Observable<any> {
    return this.http.get<any>( this.url + '/supplier');
  }
  getSupplierById(id: any):Observable<any> {
    return this.http.get<any>( this.url + '/supplier/' + id);
  }
  setSupplier(data: any):Observable<any> {
    return this.http.post( this.url + '/supplier', data);
  }
  deleteSupplier(id: any):Observable<any> {
    return this.http.delete( this.url + '/supplier/'+ id);
  }
  updateSupplier(id:any, data: any):Observable<any> {
    return this.http.put( this.url + '/supplier/' + id, data);
  }
}

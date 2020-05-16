import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  url: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getInventory():Observable<any> {
    return this.http.get<any>( this.url + '/inventory');
  }
  getInventoryById(id: any):Observable<any> {
    return this.http.get<any>( this.url + '/inventory/' + id);
  }
  getInventoryByStoreId(id: any):Observable<any> {
    return this.http.get<any>( this.url + '/inventory/byStore/' + id);
  }
  setInventory(data: any):Observable<any> {
    return this.http.post( this.url + '/inventory', data);
  }
  deleteInventory(id: any):Observable<any> {
    return this.http.delete( this.url + '/inventory/'+ id);
  }
  updateInventory(id:any, data: any):Observable<any> {
    return this.http.put( this.url + '/inventory/' + id, data);
  }}

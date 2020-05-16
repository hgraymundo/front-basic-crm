import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  url: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  
  getStock(id: any):Observable<any> {
    return this.http.get<any>( this.url + '/stock/byInventory/' + id);
  }

}

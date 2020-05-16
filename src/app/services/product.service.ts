import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getProduct():Observable<any> {
    return this.http.get<any>( this.url + '/product');
  }
  getProductById(id: any):Observable<any> {
    return this.http.get<any>( this.url + '/product/' + id);
  }
  setProduct(data: any):Observable<any> {
    return this.http.post( this.url + '/product', data);
  }
  deleteProduct(id: any):Observable<any> {
    return this.http.delete( this.url + '/product/'+ id);
  }
  updateProduct(id:any, data: any):Observable<any> {
    return this.http.put( this.url + '/product/' + id, data);
  }

}

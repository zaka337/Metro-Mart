import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

    getCategory( ){
      return this.http.get(constant.API_END_POINT + constant.METHODS.GET_ALL_CATEGORY);
     }

     getProducts( ){
      return this.http.get(constant.API_END_POINT + constant.METHODS.GET_ALL_PRODUCT);
     }

     saveProduct(obj:any ){
      return this.http.post(constant.API_END_POINT + constant.METHODS.CREATE_PRODUCT,obj);
     }

     updateProduct(obj:any ): Observable<any> {
      return this.http.post(constant.API_END_POINT + constant.METHODS.UPDATE_PRODUCT,obj);
     }
     
     deleteProduct(id:any ): Observable<any> {
      return this.http.get(constant.API_END_POINT + constant.METHODS.DELETE_PRODUCT + id);
     }
  }

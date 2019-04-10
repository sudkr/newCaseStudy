import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = "  http://localhost:3000/products";
  constructor(private http: HttpClient) { }
  getProducts(){
   return this.http.get<Product[]>(this.baseUrl);
  }
  //get user by id
  getProductsById(id:number){
    return this.http.get<Product>(this.baseUrl+ "/"+id)
  }

 deleteproduct(id:number){
   return this.http.delete(this.baseUrl+ "/"+id)
 }
 //modifyuser
 editproduct(product: Product){
  return this.http.put(this.baseUrl+ '/' + product.id, product);
 }
 
 createproduct(product: Product){
   return this.http.post(this.baseUrl,product);  
 }
}


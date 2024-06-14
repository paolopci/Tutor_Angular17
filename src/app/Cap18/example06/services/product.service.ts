import { Injectable } from '@angular/core';
import { Products } from '../products/products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // qui uso un server-json fake
  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Products[]>(this.url);
  }
}

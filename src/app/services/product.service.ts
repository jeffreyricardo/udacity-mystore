import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json');
  }

  /*
  getProduct(id: string): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products: Product[]) => {
        return products.find((product) => product.id)
      })
    )
  }
  */
 
}

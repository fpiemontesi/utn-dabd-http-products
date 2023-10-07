import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  get(): Observable<IProduct[]> {
    const result = this.http.get<IProduct[]>(
      'http://localhost:5000/products'
    );
    return result;
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
      'http://localhost:5000/products',
      product
    );
  }

  delete(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(
      'http://localhost:5000/products/'+id
    );
  }
}

import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pa-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Output() newProduct = new EventEmitter();
  list: IProduct[] = [];
  private subscription = new Subscription();

  constructor(private productService: ProductService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  onNewProduct() {
    this.newProduct.emit();
  }

  onDeleteProduct(id: number) {
    const confirmed = confirm('Seguro que desea borrar el producto?');
    if (confirmed) {
      this.productService.delete(id).subscribe({
        next: (product: IProduct) => {
          alert('Producto borrado exitosamemte');
          this.loadProducts();
        },
        error:() => {
          alert('Error de comunicacion con la API');
        }
      })
    }
  }

  private loadProducts() {
    this.subscription.add(
      this.productService.get().subscribe({
        next: (products: IProduct[]) => {
          this.list = products;
        },
        error: () => {
          alert('error en la API')
        }
      }));
  }

}

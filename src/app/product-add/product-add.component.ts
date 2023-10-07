import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'pa-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() productAdded = new EventEmitter();
  product: IProduct = {} as IProduct;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.productService.create(this.product).subscribe({
      next: (product: IProduct) => {
        alert('Producto creado exitosamente');
        this.product = {} as IProduct;
        this.productAdded.emit();
      },
      error:() => {
        alert('Error al comunicarse con la API');
      }
    })
  }

}

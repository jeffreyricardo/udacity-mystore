import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productList: Product[] = [];

  constructor(private productService: ProductService) {};

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => (this.productList = res));
  }

}

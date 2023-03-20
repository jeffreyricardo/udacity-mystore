import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {
  product!: Product;
  quantity: number = 0;
  id!: number;
  productList: Product[] = [];

  constructor(private route:ActivatedRoute, private productService:ProductService, private cartService: CartService) { }
  
  ngOnInit(): void {
      this.route.paramMap.subscribe(params => { 
        this.id = Number(params.get('id'));
      });

      // Get all products, then filter out the appropriate product id
      this.productService.getProducts().subscribe(res => {
        this.productList = res;
        this.product = this.productList.filter(product => product.id === this.id)[0];
      })
      
  }

  addToCart(): void {
    alert(`Added ${this.product.name} to cart.`)
    this.cartService.addToCart(this.product, this.quantity);
  }

}

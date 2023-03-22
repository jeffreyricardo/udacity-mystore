import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() updateQty: EventEmitter<number> = new EventEmitter();

  quantity: number = 0;

  constructor(private cartService: CartService) {
    this.product = new Product();
  }

  addToCart(): void {
    alert(`Added ${this.product.name} to cart.`)
    this.cartService.addToCart(this.product, this.quantity);
  }

  update(): void {
    this.updateQty.emit(this.quantity);
  }

  
}
import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() cart: CartItem[] = [];
  order!: Order;
  totalPrice: number = 0;
  name: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  updateQuantity(cartItem: CartItem): void {
    this.cartService.updateItemQuantity(cartItem);

    // If the user sets the quantity to 0, we need to
    // remove the item from the cart.
    if (cartItem.quantity == 0) {
      this.cart = this.cart.filter((testItem) => testItem.product.id != cartItem.product.id);
      this.cartService.setCart(this.cart);
    }
    this.totalPrice = this.cartService.getTotalPrice();
  }

  submitOrder(): void {

    this.order = {
      name: this.name,
      address: this.address,
      creditCard: this.creditCard,
      totalPrice: this.totalPrice
    }
    this.orderService.setOrder(this.order);
    this.router.navigate(['/confirmation']);

    this.cartService.clearCart();
  }

}

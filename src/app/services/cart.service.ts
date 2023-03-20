import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/Product';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[];
  subject = new Subject<number>();
  totalQty = 0;

  constructor() { 
    this.cart = [];
  }

  addToCart(product: Product, quantity: number) {
    const newitem: CartItem = {
      quantity: quantity,
      product: product
    }

    // if the product already exists in the cart, 
    // we only need to add the quantity to the 
    // existing product
    let bExists = false;
    for (let i = 0; i < this.cart.length; i++) {
      if (newitem.product.id == this.cart[i].product.id) {
        //alert('adding existing product')
        bExists = true;
        this.cart[i].quantity += newitem.quantity;
      }
    }
    // otherwise it's a new product, so add it
    if (!bExists) {
      this.cart.push(newitem);  
    }
    
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  setCart(cart: CartItem[]) {
    this.cart = cart;
  }

  updateItemQuantity(cartItem: CartItem) {
    let qty = 0;
    for (let i = 0; i < this.cart.length; i++) {
      qty += this.cart[i].quantity;
    }
  }

  getTotalPrice(): number {
    let totalPrice = 0;

    for (let i = 0; i < this.cart.length; i++) {
      totalPrice += (this.cart[i].product.price * this.cart[i].quantity);
    }
    return totalPrice;
  }

  getTotalQuantity(): Observable<number> {
    let totalQty = 0;

    for (let i = 0; i < this.cart.length; i++) {
      totalQty += this.cart[i].quantity;
    }

    alert(`TotalQty is: ${totalQty}`);
    this.subject.next(totalQty);

    return this.subject.asObservable();
  }

  clearCart(): void {
    this.cart = [];
  }
  
}
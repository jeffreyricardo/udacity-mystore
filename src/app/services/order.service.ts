import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order!: Order;

  constructor() { }

  setOrder(order: Order) {
    this.order = order;
  }

  getOrder(): Order {
    return this.order;
  }
}

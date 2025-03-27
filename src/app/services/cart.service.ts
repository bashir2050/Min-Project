import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  private cartSubject = new BehaviorSubject<Product[]>(this.cart);

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.updateCart();
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    this.updateCart();
  }

  clearCart() {
    this.cart = [];
    this.updateCart();
  }

  RemoveAll() {
    this.cart = [];
    this.updateCart();
  }



  private updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartSubject.next([...this.cart]);
  }
}
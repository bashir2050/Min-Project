import { Component,TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: Product[] = [];
  total: number = 0;

  @ViewChild('emptyCartTemplate') emptyCartTemplate!: TemplateRef<any>;

  constructor(private cartService: CartService, private router: Router,private vcr: ViewContainerRef) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
      this.calculateTotal();
    });
  }

  calculateTotal(): void {
    this.total = this.cart.reduce((sum, product) => sum + product.price, 0);
  }

  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
  }

  emptyCart(){
    this.cartService.RemoveAll();
    this.vcr.createEmbeddedView(this.emptyCartTemplate);
  }

  checkout(): void {
    if (this.cart.length === 0) {
      alert('Your cart is empty. Please add products before proceeding.');
      return;
    }
    this.router.navigate(['/checkout']);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  

}

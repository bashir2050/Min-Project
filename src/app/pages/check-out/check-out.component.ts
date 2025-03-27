import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-check-out',
  imports: [FormsModule, CommonModule, RouterModule  ],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {

  address = '';
  paymentMethod = 'credit_card';

  constructor(private cartService: CartService, private router: Router) {}

  checkout() {
   

    const order = {
      address: this.address,
      paymentMethod: this.paymentMethod,
      products: this.cartService.getCart(),
    };

    console.log('Order Details:', order);
    alert('Order placed successfully!');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

}

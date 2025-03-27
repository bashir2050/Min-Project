import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { ProductsComponent } from "./pages/products/products.component";
import { AddproductComponent } from "./pages/addproduct/addproduct.component";
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import {UserComponent} from "./pages/user/user.component";
import{CartComponent} from "./pages/cart/cart.component";
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';
import{ContactFormComponent} from "./pages/contact-form/contact-form.component";
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

import{ThankYouComponent} from "./pages/thank-you/thank-you.component";
import { ActivatedRoute, Router } from '@angular/router';
import {NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,RouterModule, ProductsComponent,AddproductComponent,UserComponent,CartComponent,ContactFormComponent,ThankYouComponent,AboutUsComponent,TermsAndConditionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cartItemCount: number = 0;
  submittedName: string = ''; // Store the submitted name
  hideContactPage = false;
 
  constructor(public authService: UserService,private cartService: CartService,public router: Router, private route: ActivatedRoute) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.hideContactPage = event.url.includes('/contact');
      }
    });
  
  
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cartItemCount = cart.length;
    });
  }

  logout() {
    this.authService.logout();
  }

 

  
    // Listen for route changes and reset submittedName when leaving Contact Us
    

  // This method will handle the name emitted from the child component
  handleFormSubmission(name: string) {
    this.submittedName = name; // Store the submitted name
  }

  

  
}

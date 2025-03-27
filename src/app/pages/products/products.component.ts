import { Component, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

import { Product } from '../../models/product.model';


@Component({
  selector: 'app-products',
  imports: [CommonModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = signal<Product[]>([]);  // Stores all products
  filteredProducts = signal<Product[]>([]); // Stores filtered products
  searchQuery = signal<string>(''); // Search query


  constructor(private productService: ProductService,private cartService: CartService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products.set(data);
      this.filteredProducts.set(data); // Initialize filtered products
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.title} has been added to the cart!`);
  }
  searchProducts(event: Event): void {
    const input = event.target as HTMLInputElement; // Cast the target to HTMLInputElement
    if (input) { // Check if input is not null
      const query = input.value;
      this.searchQuery.set(query);
      const lowerCaseQuery = query.toLowerCase();
      this.filteredProducts.set(
        this.products().filter(p => p.title.toLowerCase().includes(lowerCaseQuery))
      );
    }
  }
  
}

import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addproduct',
  imports: [FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  newProduct: Product = { title: '', price: 0, description: '', image: '', category: '' };


  constructor(private productService: ProductService,private router: Router) {}

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe((data) => {
      alert('Product added successfully!');
      this.router.navigate(['/']);
    });
  }
 

  



}

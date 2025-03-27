import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-user',
  imports: [FormsModule,CommonModule  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: UserService , private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Store the JWT token in localStorage
        localStorage.setItem('token', response.token);
        // Navigate to the product page after successful login
        this.router.navigate(['/cart']);
      },
      (error) => {
        this.errorMessage = 'Invalid credentials. Please try again.';
        localStorage.clear();
      }
    );
  }

}

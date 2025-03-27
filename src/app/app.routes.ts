import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import {CartComponent} from './pages/cart/cart.component';
import {UserComponent} from './pages/user/user.component';
import {ContactFormComponent} from './pages/contact-form/contact-form.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';



import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
    
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full' // Redirect to '/product' by default
  },
{
        path:'product',
        component: ProductsComponent
      },
      {
      path:'contact',
      component: ContactFormComponent
    },{ path: 'about', component: AboutUsComponent },
    { path: 'terms', component: TermsAndConditionsComponent },

      {
        path:'checkout',
        component: CheckOutComponent,
         canActivate: [AuthGuard] 
      },
      { path: 'add-product', 
        component: AddproductComponent ,canActivate: [AuthGuard]},
        { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'login', component: UserComponent}
    
];

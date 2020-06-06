import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SellerDashboardComponent} from './seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent} from './seller/view-product/view-product.component';
import { AddProductComponent } from './seller/add-product/add-product.component';
import { StartShoppingComponent } from './buyer/start-shopping/start-shopping.component';
import { CartComponent } from './buyer/cart/cart.component';
import { EditProductComponent } from './seller/edit-product/edit-product.component';
import { ProductDetailComponent } from './buyer/product-detail/product-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  
 
  
  { path: 'login-page', component: LoginComponent },
  { path: 'signup-page', component: SignupComponent },

  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule)
  },
  {
    path: 'buyer',
    loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule)
  },
  { path: '**', component: PageNotFoundComponent }

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const rountingComponents = [LoginComponent, SignupComponent, HomeComponent]

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StartShoppingComponent } from './start-shopping/start-shopping.component';
import { AuthoriseService } from '../guards/authorise.service';
import { UserAuthService } from '../guards/user-auth.service';
import { BuyerComponent } from './buyer/buyer.component';

const routes: Routes = [
    {
        path: "",
        component: BuyerComponent,
        canActivate: [AuthoriseService],
        children: [
            { path: '', redirectTo: 'buyer-dashboard', pathMatch: 'full' },
            { path: 'buyer-dashboard', component: BuyerDashboardComponent },
            { path: 'cart', component: CartComponent },
            { path: 'product-detail', component: ProductDetailComponent },
            { path: 'start-shop', component: StartShoppingComponent }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class BuyerRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerDashboardComponent } from './../seller/seller-dashboard/seller-dashboard.component';
import { AddProductComponent } from './../seller/add-product/add-product.component';
import { ViewProductComponent } from './../seller/view-product/view-product.component';
import { EditProductComponent } from './../seller/edit-product/edit-product.component';
import { AuthoriseService } from '../guards/authorise.service';
import { UserAuthService } from '../guards/user-auth.service';
import { SellerComponent } from './seller/seller.component';


const routes: Routes = [
    {
        path: '',
        component: SellerComponent
        /* canActivate: [AuthoriseService],
        children: [

            { path: '', redirectTo: 'seller-dashboard', pathMatch: 'full' },
            { path: 'seller-dashboard', component: SellerDashboardComponent},
            { path: 'add-prod', component: AddProductComponent },
            { path: 'view-prod', component: ViewProductComponent },
            { path: 'edit-prod/:id', component: EditProductComponent },
            { path: '**', component: PageNotFoundComponent }
        ] */
           
        
    }
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SellerRoutingModule { }
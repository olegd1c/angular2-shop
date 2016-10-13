import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Input, Output, EventEmitter} from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../app-model';
import { ProfileRoutes }               from '../profile/profile.routes';
const routes: Routes = [
 { path: '', component: HomeComponent }
 ,{ path: 'contact', component: ContactComponent }
 ,{ path: 'cart', component: CartComponent }
 ,{path: 'products/:productId', component: ProductDetailComponent}
 ,{path: 'product', component: ProductItemComponent},
 ...ProfileRoutes,
 { path: '**', redirectTo: '' }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Angular2ShopRoutingModule {   

 }

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
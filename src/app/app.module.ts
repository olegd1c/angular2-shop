import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing,
         appRoutingProviders }  from './components/application/app.routing';
//import {DataTableModule} from 'angular2-datatable';
import { AppComponent } from './components/application/app.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductService } from './services/product-service';
import { StarComponent } from './components/star/star.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { AuthComponent } from './components/auth/auth.component';
import { Auth } from './components/auth/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEdit } from './components/profile-edit/profile_edit.component';
import { ProfileShow } from './components/profile-show/profile_show.component';
import { HistoryComponent } from './components/history/history.component';
import { OrderComponent } from './components/order/order.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { ProductSearchPipe } from './components/product-pipe/product-search.pipe';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderItemComponent } from './components/order-item/order-item.component'; // <-- import the module


/*
import { enableProdMode, provide, PLATFORM_PIPES } from '@angular/core';
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  provide(PLATFORM_PIPES, {
    useValue: [TimeAgoPipe],
    multi: true
  })
]);
*/

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductItemComponent,
    SearchComponent,
    NavbarComponent,
    StarComponent,
    ProductCartComponent,
    AuthComponent,
    ProfileComponent,
    ProfileEdit,
    ProfileShow,
    HistoryComponent,
    ProductSearchPipe,
    OrderComponent,
    OrderDetailsComponent,
    OrderItemComponent,
        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    Ng2PaginationModule,           
  ],
  providers: [appRoutingProviders,ProductService,Auth, ProductSearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: TodoSeedData },
]);
*/
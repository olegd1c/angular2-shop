import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing,
         appRoutingProviders }  from './components/application/app.routing';

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
    ProfileShow    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing    
  ],
  providers: [appRoutingProviders,ProductService,Auth],
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
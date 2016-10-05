import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    StarComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing    
  ],
  providers: [appRoutingProviders,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { ProductPageComponent } from './landing-page/product-page/product-page.component';
import { ProductItemComponent } from './landing-page/product-item/product-item.component';
import { CartPageComponent } from './landing-page/cart-page/cart-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactComponent } from './landing-page/contact/contact.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'products', component: ProductPageComponent },
  { path: 'product/:id', component: ProductItemComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProductPageComponent,
    ProductItemComponent,
    CartPageComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

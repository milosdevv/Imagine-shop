import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/pages/landing-page/landing-page.component';
import { ProductPageComponent } from './landing-page/pages/product-page/product-page.component';
import { ProductItemComponent } from './landing-page/pages/product-page/product-item/product-item.component';
import { CartPageComponent } from './landing-page/pages/cart-page/cart-page.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactComponent } from './landing-page/pages/contact-page/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    NotFoundComponent,
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

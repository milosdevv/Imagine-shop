import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/Product';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../../services/product.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  products: Product[] = [];
  product: Product | undefined;

  constructor(
    private http: HttpClient,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    return this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
}

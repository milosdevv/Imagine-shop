import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Model/Product';
import { Cart } from '../../Model/Cart';
import { CartItem } from '../../Model/CartItem';
import { CartService } from '../../services/cart.service';
import { ProductServiceService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  products: Product[] = [];
  product: Product | undefined;
  cart!: Cart;
  @Input() productSlides: Product;

  constructor(
    private cartService: CartService,
    private productService: ProductServiceService,
    private http: HttpClient, // Ensure HttpClient is injected
    private route: ActivatedRoute
  ) {
    this.setCart();
  }

  isActive: boolean = false;
  toggleActive(product: Product) {
    this.products.forEach((p) => {
      if (p !== product) {
        p.isActive = false;
      }
    });
    product.isActive = !product.isActive;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = +params.get('id');
      this.getProducts();
      this.getProductDetails(productId);
    });
  }

  getProducts() {
    this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((response) => {
        this.products = response;
      });
  }

  getProductDetails(id: number) {
    this.productService.getProductById(id).subscribe((data: Product) => {
      this.product = data;
    });
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
}

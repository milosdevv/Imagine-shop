import { Injectable } from '@angular/core';
import { Cart } from '../Model/Cart';
import { Product } from '../Model/Product';
import { CartItem } from '../Model/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(product: Product): void {
    let cartItem = this.cart.items.find(
      (item) => item.product.id === product.id
    );
    if (cartItem) {
      this.changeQuantity(product.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(product));
  }

  removeFromCart(productId: number): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.product.id != productId
    );
  }
  changeQuantity(productId: number, quantity: number) {
    let cartItem = this.cart.items.find(
      (item) => item.product.id === productId
    );
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}

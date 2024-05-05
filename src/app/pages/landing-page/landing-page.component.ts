import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/Product';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../../services/product.service';
import { Category } from '../../Model/Category';
import { CategoriesService } from '../../services/categories.service';
import { UsersService } from '../../services/users.service';
import { User } from '../../Model/User';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  products: Product[] = [];
  product: Product | undefined;
  categories: Category[] = [];
  users: User[] = [];

  constructor(
    private http: HttpClient,
    private productService: ProductServiceService,
    private categoryService: CategoriesService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.getProducts();

    this.getCategories();
    this.categoryService.getCategories().subscribe(
      (categories) => {
        console.log('Categories:', categories);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
    this.getUsers();
    this.userService.getUsers().subscribe(
      (users) => {
        console.log('users:', users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  getProducts() {
    return this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  getCategories() {
    return this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  getUsers() {
    return this.userService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }
}

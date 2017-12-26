import { ProductService } from './../services/product.service';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories$;
  products$;

  constructor(
    private categoryService : CategoryService,
    private productService : ProductService
  ) { 
    this.categories$ = this.categoryService.getCategories();
    this.products$ = this.productService.getAll();
  }

  ngOnInit() {
  }

}

import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/app.product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[] = [];
  filteredProducts : Product[] = [];
  category : string;

  constructor(
    private route : ActivatedRoute,
    private productService : ProductService
  ) { 
    
  }

  ngOnInit() {
    this.productService.getAll()
      .switchMap(products => {
        this.filteredProducts = this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category)?
          this.products.filter(p => p.category == this.category) : this.products;
      });
    
  }

}

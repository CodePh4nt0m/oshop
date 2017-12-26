import { Product } from './../../models/app.product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  subscription : Subscription;

  products : Product[] = [];
  filteredProducts : Product[] = [];

  constructor(private productService : ProductService) {
    this.subscription = productService.getAll()
    .subscribe(products => {
      this.filteredProducts = this.products = products
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  filter(query : string){
    this.filteredProducts = (query) ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
      : this.products;
  }
}

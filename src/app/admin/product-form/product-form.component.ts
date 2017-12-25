import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product = {};
  constructor(
    private productService : ProductService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  save(product){
    console.log(product);
    this.productService.create(product);
  }
}

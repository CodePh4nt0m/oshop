import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product = {};
  categories$;
  id : string;

  constructor(
    private productService : ProductService,
    private categoryService : CategoryService,
    private router : Router,
    private route : ActivatedRoute
  ) { 
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).take(1).subscribe(p=> this.product = p);
  }

  ngOnInit() {
  }

  save(product){
    if(this.id) this.productService.update(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(confirm('Are you sure you want to delete this product?')){
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    }
  }
}

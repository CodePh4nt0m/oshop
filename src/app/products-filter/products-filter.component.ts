import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Input } from '@angular/core';

@Component({
  selector: 'products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
  categories$;
  @Input('category') category : string;

  constructor(
    private categoryService : CategoryService
  ) { 
    this.categories$ = this.categoryService.getCategories();
  }

  ngOnInit() {
  }

}

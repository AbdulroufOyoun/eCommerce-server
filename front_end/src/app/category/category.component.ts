import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsFilters } from '../models/products_filters/products-filters';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  url_id: any;
  filters = new ProductsFilters();
  categories: any;
  similar_categories: any;
  products: any;
  page_index: any = 1;
  page: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.url_id = this.route.snapshot.params['id'];
    this.show_child();
    this.show_products();
    this.count_pagination();
  }

  show_child() {
    this.dataService.show_category_child(this.url_id).subscribe((res) => {
      this.categories = res;
      this.similar_categories = this.categories.child_category;
      console.log(res);
    });
  }

  show_products() {
    this.dataService
      .show_products(this.url_id, this.page_index, this.filters)
      .subscribe((res) => {
        this.products = res;
      });
  }

  main_filter(filter_id: any) {
    if (this.filters.ids != null && this.filters.ids.includes(filter_id)) {
      let id_index = this.filters.ids.indexOf(filter_id);
      this.filters.ids.splice(id_index, 1);
    } else {
      this.filters.ids.push(filter_id);
    }
    this.show_products();
  }

  price_filter(filter_price: any) {
    if (
      this.filters.price != null &&
      this.filters.price.includes(filter_price)
    ) {
      let id_index = this.filters.price.indexOf(filter_price);
      this.filters.price.splice(id_index, 1);
    } else {
      this.filters.price.push(filter_price);
    }
    this.show_products();
  }
  count_pagination() {
    this.dataService
      .count_products_pagination(this.url_id, this.filters)
      .subscribe((res) => {
        this.page = res;
        this.page = this.page * 10;
        console.log(this.page);
      });
  }

  show_product_pagination() {
    setTimeout(() => {
      this.show_products();
    }, 1);
  }
}

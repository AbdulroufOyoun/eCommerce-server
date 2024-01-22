import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-purchase-panel',
  templateUrl: './purchase-panel.component.html',
  styleUrls: ['./purchase-panel.component.css'],
})
export class PurchasePanelComponent {
  cart_products: any;
  orders: any;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.show_cart();
    this.show_orders();
  }

  show_cart() {
    this.dataService.show_cart().subscribe((res) => {
      this.cart_products = res;
    });
  }
  show_orders() {
    this.dataService.show_orders().subscribe((res) => {
      this.orders = res;
      console.log(res);
    });
  }
}

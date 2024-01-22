import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home-navBar',
  templateUrl: './home-naveBar.component.html',
  styleUrls: ['./home-naveBar.component.css'],
})
export class HomeNaveBarComponent {
  loggedIN: boolean = true;
  categories: any;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.show_categories();
    this.loggedIn();
  }

  show_categories() {
    this.dataService.show_simple_categories().subscribe((res) => {
      this.categories = res;
    });
  }

  loggedIn() {
    this.dataService.status().subscribe((res) => {
      this.loggedIN = res;
    });
  }
}

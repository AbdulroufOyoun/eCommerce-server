import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  url = 'http://127.0.0.1:8000/api/';
  private IsLoggedIn = new BehaviorSubject<boolean>(false);

  login(data: any) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return this.httpClient.post(this.url + 'login', data, {
      headers,
    });
  }

  signUp(data: any) {
    return this.httpClient.post(this.url + 'signUp', data);
  }

  status() {
    const localData: any = localStorage.getItem('user');
    if (!localData) {
      this.IsLoggedIn.next(false);
      console.log('User is not logged in ');
    } else {
      const userObj = JSON.parse(atob(localData));
      const token_expires_at = new Date(userObj.token_expires_at);
      const current_date = new Date();
      if (token_expires_at > current_date) {
        this.IsLoggedIn.next(true);
      } else {
        this.IsLoggedIn.next(false);
        console.log('Token Expires!!');
      }
    }
    return this.IsLoggedIn.asObservable();
  }

  show_simple_categories() {
    return this.httpClient.get(this.url + 'dropDown_categories');
  }

  show_category_child($category_id: any) {
    return this.httpClient.get(this.url + 'category/' + $category_id);
  }

  show_products($category_id: any, page_index: any, data: any = null) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return this.httpClient.post(
      this.url + 'products/' + $category_id + '/' + page_index,
      data,
      {
        headers,
      }
    );
  }

  count_products_pagination($category_id: any, data: any = null) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return this.httpClient.post(
      this.url + 'count_products/' + $category_id,
      data,
      {
        headers,
      }
    );
  }

  show_cart() {
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(atob(user));
    const token = userObj.token;
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return this.httpClient.get(this.url + 'show_cart', {
      headers,
    });
  }

  show_orders() {
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(atob(user));
    const token = userObj.token;
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return this.httpClient.get(this.url + 'show_orders', {
      headers,
    });
  }
}

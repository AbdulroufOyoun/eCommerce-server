import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { UserCheck } from '../models/Register/user-check';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userCheck = new UserCheck();
  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {}

  loggedIN: boolean = false;

  login() {
    this.dataService.login(this.userCheck).subscribe((res) => {
      localStorage.setItem('user', btoa(JSON.stringify(res)));
      this.router.navigate(['/']);
    });
  }

  signUp_page() {
    this.router.navigate(['/signUp']);
  }
}

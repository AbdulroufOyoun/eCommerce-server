import { Component } from '@angular/core';
import { SignUp } from '../models/Register/sign-up';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  user = new SignUp();
  confirm_password: any;

  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {}

  loggedIN: boolean = false;

  signUp() {
    this.dataService.signUp(this.user).subscribe((res) => {
      localStorage.setItem('user', btoa(JSON.stringify(res)));
      this.router.navigate(['/']);
    });
  }

  login_page() {
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';



  constructor(private router: Router) {}

  login() {
    if (this.username === '' && this.password === '') {
      this.router.navigate(['/instructions']);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
}

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
    // Perform validation - Check if username and password are correct
    if (this.username === 'Aravind' && this.password === 'Aravind@123') {
      // Redirect to the quiz component or any desired route upon successful login
      this.router.navigate(['/Questionpaper']);
    } else {
      // Handle incorrect login credentials
      alert('Invalid username or password. Please try again.');
    }
  }
}

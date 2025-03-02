import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  standalone: false,
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}

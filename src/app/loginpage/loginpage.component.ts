import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: false,
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  email: string = 'email@gmail.com';
  password: string = 'password';
  constructor(private router: Router) {} 

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    if (this.email && this.password){
      this.router.navigate(['/home']);
    } else {
      alert("กรุณากรอกข้อมูลให้และถูกต้อง");
    }
  }
}

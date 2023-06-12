import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'theatre-pro';
  isAdmin: boolean = false;

  constructor(private router: Router) {
    var adminUser = localStorage.getItem('adminUser');
    if(adminUser) {
      this.isAdmin = true;
    }
  }

  hasAdmin(admin: boolean) {
    this.isAdmin = admin;
  }

  logout(isAdmin: boolean) {
    console.log("This works as well",isAdmin);
    this.isAdmin = false;
    this.router.navigate(['/']);
  }
}

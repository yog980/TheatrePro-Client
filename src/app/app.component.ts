import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'threatre-pro';

  constructor(private router: Router) {}

  isAdmin: boolean = false;

  hasAdmin(admin: boolean) {
    this.isAdmin = admin;
  }

  logout(isAdmin: boolean) {
    console.log("This works as well",isAdmin);
    this.isAdmin = false;
    this.router.navigate(['/']);
  }
}

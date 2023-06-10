import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'threatre-pro';

  isAdmin: boolean = false;

  hasAdmin(admin: boolean) {
    this.isAdmin = admin;
  }

  logout(isAdmin: boolean) {
    console.log("This works as well");
    this.isAdmin = isAdmin;
  }
}

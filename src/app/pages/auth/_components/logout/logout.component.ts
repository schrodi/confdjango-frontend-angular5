import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/index';

@Component({
  selector: 'auth-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(
        private router: Router,
        private auth: AuthService) {}
  
  
  logout() {
    this.auth.logout();
     this.router.navigate(['/']);
  }

}

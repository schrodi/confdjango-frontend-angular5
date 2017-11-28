import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/index';

@Component({
  selector: 'auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {
  
  loggedIn: Boolean;
  
  constructor(private authService: AuthService) { 
    
    this.loggedIn = authService.loggedIn();
    
  }

  ngOnInit() {
  }
  
}

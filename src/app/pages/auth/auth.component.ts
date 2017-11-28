import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/index';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {
  
  //var loggedIn ;
  loggedIn: boolean;
  
  constructor(private authService: AuthService) { 
    
    this.loggedIn = authService.loggedIn();
    
  }

  ngOnInit() {
  }

}

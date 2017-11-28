import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/index';


interface Credentials {
  username: string,
  password: string
}



@Component({
    moduleId: module.id,
    selector: 'auth-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss'],
})




export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authService: AuthService) { }

    ngOnInit() {
        // reset login status
        this.authService.logout();
    }

    login() {
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
    
    
    
}

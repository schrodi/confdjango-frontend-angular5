import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/Rx';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { environment } from 'environments/environment';
import { DataService }  from 'app/core/restAPI/data.service';

@Injectable()
export class AuthService {
    // login listener - sends notification if status changes
    loginStatusListener:EventEmitter<any> = new EventEmitter();
    
    public token: string;
    public currentUser;
    
    private headers = new Headers({ 'content-type': 'application/json' });
    private options =  new RequestOptions({headers: this.headers});
    
    jwtHelper: JwtHelper = new JwtHelper();
    
    constructor(
        private http: HttpClient,
        private data: DataService,
        ) {
        // set token if saved in local storage
        this.currentUser = JSON.parse(localStorage.getItem('auth'));
        this.token = this.currentUser && this.currentUser.token;
    }


    login(username: string, password: string): Observable<boolean> {
        
        console.log("REST-API user authentification: Starting ... => Request to " + environment.RestAPI_Endpoint + environment.RestAPI_login);
        //return this.http.post('https://confdjango-backend-aschroth.c9users.io/api/token-auth/', JSON.stringify({ username: username, password: password }), this.options)
        return this.http.post(environment.RestAPI_Endpoint + environment.RestAPI_login, { username, password })
            .map(
                data => {
                    console.log("Auth: Login ... ");
                    
                    let token = data['token'];
                    if (token) {
                        // set token property
                        this.token = token;
                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('auth', JSON.stringify({ username: username, token: token }));
                        
                    } 
                    
                    if (this.loggedIn()) {
                        this.loadPermissions();
                        return true;
                    } else { 
                        return false;
                    }
                }
            
            )
            .catch(
                error => {
                    console.log("Auth: Error => " + error.status);
                    return Observable.of(false);
                }
            );
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('auth');
        this.loginStatusListener.emit(false);
        console.log("Auth: Logged out!");
    }
    
    
    // ## getter
    
    getToken(){
        return this.token;
    }
    
    loadPermissions(): Observable<boolean>{
        var perms = this.data.get(environment.RestAPI_Endpoint + environment.RestAPI_account_permissions);
        
        console.log(environment.RestAPI_Endpoint);
        //return this.http.get(this.auth_loadPermissions_Url, { username, password })
        return Observable.of(false);
    }
    // ## get status
    
    loggedIn():boolean {
        var tokenExpired = tokenNotExpired(null, this.token);

        if(tokenExpired) {
            console.log("Auth: Check Token => Token verified!");
        } else {
            console.log("Auth: Check Token => Token expired!");
            //this.logout();
        }
        
        return tokenExpired;
    }
    
    // ## information
    
    tokenExpiresAt() {
        return this.jwtHelper.getTokenExpirationDate(this.token);
    }
    
    getHeaders():string {
        return `JWT ${this.getToken()}`;
    }
}
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { AuthService }  from 'app/core/auth/auth.service';

@Injectable()
export class DataService {
    
    private results;

    // ## the JWT token authentication is done via _core/auth/_interceptors; each http request will be extended with the access_token by the authInterceptor
    constructor(private http: HttpClient) {}
    
    
    public get(url: string) {
        console.log("RestApi: GET Request to url => " + url)
        this.results = this.http.get(url); 
    }  



    public sub
    


}

import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private auth: AuthService;

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.auth = this.injector.get(AuthService); // get it here within intercept

    const authRequest = request.clone({
      headers: request.headers.set('Authorization', this.auth.getHeaders())
    });
    console.log("Auth: Token added to Http request.")
    return next.handle(authRequest);

  } 

}
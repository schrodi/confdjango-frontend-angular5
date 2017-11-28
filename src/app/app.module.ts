import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AuthModule } from './pages/auth/auth.module';
import { AuthService, AuthGuard, AuthInterceptor }    from 'app/core/auth/index';
import { DataService } from 'app/core/restAPI/data.service';

@NgModule({
  
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    
    AuthModule,
  ],
  
  declarations: [
    AppComponent,
  ],
  
  providers: [
    AuthService,
    AuthGuard,
    // ## add auth token to each http request
    AuthInterceptor,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		},
		DataService,

  ],
  
  exports: [
    RouterModule,
    ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

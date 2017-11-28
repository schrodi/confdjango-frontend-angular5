import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'app/main/shared/modules/material.module';
import { FormsModule } from '@angular/forms';
import { AuthComponent }  from './auth.component';

import { LoginComponent } from './_components/login/login.component';
import { LogoutComponent } from './_components/logout/logout.component';
import { AuthButtonComponent } from './_components/auth-button/auth-button.component';

import { RouterModule, Routes } from '@angular/router';




@NgModule({
  
  
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
  ],
  
  
  declarations: [
    AuthComponent,
    LoginComponent,
    LogoutComponent,
    //AuthButtonComponent
  ]
    
    
})
export class AuthModule { }

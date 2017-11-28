import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent }  from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from 'app/main/shared/modules/material.module';

import { AuthButtonComponent } from 'app/pages/auth/_components/auth-button/auth-button.component';

import { MatCardModule } 
  from '@angular/material';

@NgModule({
  
  
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    MaterialModule,
  ],
  
  
  declarations: [
    MainComponent,
    AuthButtonComponent,
  ],
    
})
export class MainModule { }

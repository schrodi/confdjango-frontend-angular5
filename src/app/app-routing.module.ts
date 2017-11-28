import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from  './app.component';
import { AuthComponent } from './pages/auth/auth.component';



const routes: Routes = [
    { path: '', loadChildren: './main/main.module#MainModule', /*canActivate: [AuthGuard] */},
    
    { path: 'auth' , component: AuthComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
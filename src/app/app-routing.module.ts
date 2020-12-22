import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './dashboard/display/display.component';
import { CreateComponent } from './books/create/create.component';
import { LoginComponent } from "./login-register/login/login.component";


//guards
import { AuthenticationGuard } from "./authentication.guard";

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'dashboard' , component: DisplayComponent , canActivate:[AuthenticationGuard]},
  {path: 'create' , component: CreateComponent ,  canActivate:[AuthenticationGuard]},
  // {path: ':id/edit' , component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

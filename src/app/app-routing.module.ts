import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./ui/dashboard/dashboard.component";
import { LoginComponent } from "./ui/login/login.component";
import { SignupComponent } from "./ui/signup/signup.component";
import { UserComponent } from "./ui/user/user.component";

const routes: Routes = [
    {path:"dashboard", component:DashboardComponent},
    {path:"user", component:UserComponent},
    {path:"login", component:LoginComponent},
    {path:"signup", component:SignupComponent},
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, 
    {path:"**", component:DashboardComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
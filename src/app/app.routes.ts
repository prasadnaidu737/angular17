import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"register",component:SignupComponent},
    {path:"login",component:LoginComponent},
    {path:"admin",component:AdminComponent},
    {path:"success",component:SuccessComponent},
    {path:"**",component:PagenotfoundComponent}
];

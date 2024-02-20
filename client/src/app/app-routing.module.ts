import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/public/landing/landing.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ProfileComponent } from './pages/client/profile/profile.component';

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  
  {path:'dash', component:LayoutComponent, children: [
    {path:'', component:HomeComponent},
    {path:'profile', component:ProfileComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

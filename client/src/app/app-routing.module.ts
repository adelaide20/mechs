import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/public/landing/landing.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ProfileComponent } from './pages/client/profile/profile.component';
import { MechProfileComponent } from './pages/mechanic/mech-profile/mech-profile.component';
import { CreateComponent } from './pages/appointment/create/create.component';
import { ListComponent } from './pages/appointment/list/list.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'dash', component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'mechpro', component: MechProfileComponent },
      { path: 'create', component: CreateComponent },
      { path: 'apps', component: ListComponent },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

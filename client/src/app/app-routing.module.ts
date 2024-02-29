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
import { InvoiceComponent } from './pages/invoice/invoice.component';

const routes: Routes = [
  // public routings
  { path: 'landing', component: LandingComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // client routings
  {
    path: 'client', component: LayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'mechpro', component: MechProfileComponent },
      { path: 'create', component: CreateComponent },
      { path: 'apps', component: ListComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },

// mechanic routings

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

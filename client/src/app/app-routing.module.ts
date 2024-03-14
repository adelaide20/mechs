import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/public/landing/landing.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ProfileComponent } from './pages/client/profile/profile.component';
import { MechProfileComponent } from './pages/client/mech-profile/mech-profile.component';
import { CreateComponent } from './pages/appointment/create/create.component';
import { ListComponent } from './pages/appointment/list/list.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { ClientLayoutComponent } from './components/client-layout/client-layout.component';
import { MechLayoutComponent } from './components/mech-layout/mech-layout.component';
import { DashboardComponent } from './pages/mechanic/dashboard/dashboard.component';

const routes: Routes = [
  // public routings
  { path: 'landing', component: LandingComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // client routings
  {
    path: 'client', component: ClientLayoutComponent, children: [
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
{
  path: 'mechanic', component: MechLayoutComponent , children: [
    { path: '', redirectTo: 'dash', pathMatch: 'full' },
    { path: 'dash', component: DashboardComponent },
  ]
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

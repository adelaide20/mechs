import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/public/landing/landing.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ProfileComponent } from './pages/client/profile/profile.component';
import { CreateComponent } from './pages/appointment/create/create.component';
import { UpdateComponent } from './pages/appointment/update/update.component';
import { MechProfileComponent } from './pages/client/mech-profile/mech-profile.component';
import { ListComponent } from './pages/appointment/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { MechLayoutComponent } from './components/mech-layout/mech-layout.component';
import { ClientLayoutComponent } from './components/client-layout/client-layout.component';
import { DashboardComponent } from './pages/mechanic/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    CreateComponent,
    UpdateComponent,
    MechProfileComponent,
    ListComponent,
    SearchPipe,
    InvoiceComponent,
    MechLayoutComponent,
    ClientLayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

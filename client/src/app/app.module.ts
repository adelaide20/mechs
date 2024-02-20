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
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CreateComponent } from './pages/appointment/create/create.component';
import { UpdateComponent } from './pages/appointment/update/update.component';
import { MechProfileComponent } from './pages/mechanic/mech-profile/mech-profile.component';
import { ListComponent } from './pages/appointment/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ToolbarComponent,
    LayoutComponent,
    CreateComponent,
    UpdateComponent,
    MechProfileComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

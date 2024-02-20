import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/public/landing/landing.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ProfileComponent } from './pages/client/profile/profile.component';
import { ToolbarComponent } from './componets/toolbar/toolbar.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CreateComponent } from './pages/appointment/create/create.component';
import { UpdateComponent } from './pages/appointment/update/update.component';
import { MechProfileComponent } from './pages/mechanic/mech-profile/mech-profile.component';
import { ListComponent } from './pages/appointment/list/list.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

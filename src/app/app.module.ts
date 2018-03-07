import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarDetailComponent } from './avatar-detail/avatar-detail.component';
import { AvatarCreateComponent } from './avatar-create/avatar-create.component';
import { AvatarEditComponent } from './avatar-edit/avatar-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },

  { path: 'avatar', component: AvatarComponent, canActivate: [AuthGuardService] },
  { path: 'avatar-detail/:id', component: AvatarDetailComponent, canActivate: [AuthGuardService] },
  { path: 'avatar-create', component: AvatarCreateComponent, data: { title: 'Create Avatar' }, canActivate: [AuthGuardService] },
  { path: 'avatar-edit/:id', component: AvatarEditComponent, data: { title: 'Edit Avatar' }, canActivate: [AuthGuardService] },

];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AvatarComponent,
    AvatarDetailComponent,
    AvatarCreateComponent,
    AvatarEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

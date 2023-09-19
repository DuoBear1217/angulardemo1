import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { MemberCenterComponent } from './login/member-center/member-center.component';
import { AuthGuard } from './login/auth.guard';
import { LoginMatchGuard } from './login/login-match.guard';
import { ErrorComponent } from './login/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'membercenter',
    component: MemberCenterComponent,
    canActivate: [AuthGuard],
    canMatch: [LoginMatchGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

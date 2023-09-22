import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { MemberCenterComponent } from './login/member-center/member-center.component';
import { AuthGuard } from './login/auth.guard';
import { LoginMatchGuard } from './login/login-match.guard';
import { ErrorComponent } from './login/error/error.component';
import { AuthOutGuard } from './login/auth-out.guard';
import { TestDeactivateGuard } from './testRouteGuard/test-deactivate.guard';
import { MemberComponent } from './member/member/member.component';
import { ProductsListComponent } from './product/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canDeactivate: [TestDeactivateGuard]
  },
  {
    path: 'membercenter',
    component: MemberCenterComponent,
    canActivate: [AuthGuard],
    // canMatch: [LoginMatchGuard],
    children: [
      {
        path: 'member',
        component: MemberComponent
      },
      {
        path: 'product',
        loadChildren: () => import('./product/products-list/products-list.module').then((e) => e.ProductsListModule)
      }
    ]
  },
  // {
    // path: '**',
    // component: ErrorComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

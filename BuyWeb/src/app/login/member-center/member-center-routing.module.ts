import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberCenterComponent } from './member-center.component';
import { ErrorComponent } from '../error/error.component';

const routes: Routes = [
  {
    path: '',
    component: MemberCenterComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberCenterRoutingModule { }

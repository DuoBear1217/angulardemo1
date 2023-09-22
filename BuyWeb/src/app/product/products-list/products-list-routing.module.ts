import { ProdcutDetailsComponent } from './../prodcut-details/prodcut-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  },
  // {
  //   path: 'test',
  //   component: ProductsListComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsListRoutingModule { }

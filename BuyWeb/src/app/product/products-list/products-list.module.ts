// 預設Modules
import { NgModule } from '@angular/core';

// 自己的路由modules
import { ProductsListRoutingModule } from './products-list-routing.module';

// 額外引用Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// AG-Grid
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    HttpClientModule,
    ProductsListRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductsListModule { }

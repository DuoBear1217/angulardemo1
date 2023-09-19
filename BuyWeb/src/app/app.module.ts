// 預設Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 引用component
import { MemberCenterComponent } from './login/member-center/member-center.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ProductListComponent } from './product/product-list/product-list.component';

// 額外引用Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// AG-Grid
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    MemberCenterComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

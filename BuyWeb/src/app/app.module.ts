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
import { ErrorComponent } from './login/error/error.component';
import { ProductsListComponent } from './product/products-list/products-list.component';

// 額外引用Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// AG-Grid
import { AgGridModule } from 'ag-grid-angular';
import { CheckPwdDirective } from './login/check-pwd.directive';

@NgModule({
  declarations: [
    AppComponent,
    MemberCenterComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    ErrorComponent,
    ProductsListComponent,
    CheckPwdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

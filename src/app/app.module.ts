import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlApi } from './services/baseurl.services';
import { IndexHomeComponent } from './home/indehome.component';
import { IndexAdminComponent } from './admin/indeadmin.component';
import { CreateAccountComponent } from './admin/account/createaccount.component';
import { AccountService } from './services/account.service';
import { UrlService } from './services/url.services';
import { DepartmentsServices } from './services/departments.service';
import { RequestServices } from './services/request.service';
import { RoleClaimsServices } from './services/roleclaims.service';
import { RoleServices } from './services/role.service';
import { IndexAccountComponent } from './admin/account/indexaccount.component';
import { UpdateAccountComponent } from './admin/account/updateaccount.component';
import { DetailAccountComponent } from './admin/account/detailaccount.component';
import { CreateDepartmentComponent } from './admin/department/createdepartment.component';
import { IndexDepartmentComponent } from './admin/department/indexdepartment.component';
import { UpdateDepartmentComponent } from './admin/department/updatedepartment.component';
import { DetailDepartmentComponent } from './admin/department/detaildepartment.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexHomeComponent,
    IndexAdminComponent,
    CreateAccountComponent,
    IndexAccountComponent,
    UpdateAccountComponent,
    DetailAccountComponent,
   CreateDepartmentComponent,
   IndexDepartmentComponent,
   UpdateDepartmentComponent,
   DetailDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [
    UrlApi,
    AccountService,
    UrlService,
    DepartmentsServices,
    RequestServices,
    RoleClaimsServices,
    RoleServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

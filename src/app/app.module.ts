import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlApi } from './services/baseurl.services';
import { IndexHomeComponent } from './home/index/indexhome.component';
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
import { UpdateRequestComponent } from './admin/request/updaterequest.component';
import { IndexRequestComponent } from './admin/request/indexrequest.component';
import { CreateRequestComponent } from './admin/request/createrequest.component';
import { DetailRequestComponent } from './admin/request/detailrequest.component';
import { CreateRoleComponent } from './admin/role/createrole.component';
import { UpdateRoleComponent } from './admin/role/updaterole.component';
import { IndexRoleComponent } from './admin/role/indexrole.component';
import { DetailRoleComponent } from './admin/role/detailrole.component';
import { CreateRoleClaimComponent } from './admin/roleclaim/createroleclaim.component';
import { UpdateRoleClaimComponent } from './admin/roleclaim/updateroleclaim.component';
import { IndexRoleClaimComponent } from './admin/roleclaim/indexroleclaim.component';
import { DetailRoleClaimComponent } from './admin/roleclaim/detailroleclaim.component';
import { LayoutHomeComponent } from './home/layouthome.component';
import { ForgotPasswordComponent } from './home/forgot/forgotpassword.component';
import { RegexApi } from './services/regex.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ValidatorData } from './services/validatorData.service';
import { ErrorComponent } from './home/404/404.component';
import { loginAccount } from './admin/account/login/loginAccount.component';



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
    DetailDepartmentComponent,
    CreateRequestComponent,
    UpdateRequestComponent,
    IndexRequestComponent,
    DetailRequestComponent,
    CreateRoleComponent,
    UpdateRoleComponent,
    IndexRoleComponent,
    DetailRoleComponent,
    CreateRoleClaimComponent,
    UpdateRoleClaimComponent,
    IndexRoleClaimComponent,
    DetailRoleClaimComponent,
    LayoutHomeComponent,
    ForgotPasswordComponent,
    ErrorComponent,
    loginAccount

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UrlApi,
    AccountService,
    UrlService,
    DepartmentsServices,
    RequestServices,
    RoleClaimsServices,
    RoleServices,
    RegexApi,
    ValidatorData

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

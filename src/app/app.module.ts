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
import { DetailAccountInformationComponent } from './admin/account/account_detail/accountInformation.component';
import { RequestFileService } from './services/requestFile.service';
import { CreateRequestComponent } from './admin/request/create/createrequest.component';
import { _CreateRequestComponent } from './admin/request/createRequest.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { IndexRequest_1Component } from './admin/request/index/indexRequest_1.component';
import { IndexRequest_2Component } from './admin/request/index/indexRequest_2.component';
import { IndexRequest_3Component } from './admin/request/index/indexRequest_3.component';
import { TwoColumnFormComponent } from './admin/request/Detail/two-column-form.component';
import { UpdateAdminRequestComponent } from './admin/request/updateadmin/updaterequest.component';
import { UpdateUserRequestComponent } from './admin/request/updateuser/updaterequest.component';



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
    loginAccount,
    DetailAccountInformationComponent,
    _CreateRequestComponent,
    IndexRequest_1Component,
    IndexRequest_2Component,
    IndexRequest_3Component,
    TwoColumnFormComponent,
    UpdateAdminRequestComponent,
    UpdateUserRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
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
    ValidatorData,
    RequestFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexHomeComponent } from './home/index/indexhome.component';
import { IndexAdminComponent } from './admin/indexadmin.component';
import { CreateAccountComponent } from './admin/account/createaccount.component';
import { DetailAccountComponent } from './admin/account/detailaccount.component';
import { UpdateAccountComponent } from './admin/account/updateaccount.component';
import { IndexAccountComponent } from './admin/account/indexaccount.component';
import { CreateDepartmentComponent } from './admin/department/createdepartment.component';
import { DetailDepartmentComponent } from './admin/department/detaildepartment.component';
import { UpdateDepartmentComponent } from './admin/department/updatedepartment.component';
import { IndexDepartmentComponent } from './admin/department/indexdepartment.component';
import { CreateRequestComponent } from './admin/request/createrequest.component';
import { DetailRequestComponent } from './admin/request/detailrequest.component';
import { UpdateRequestComponent } from './admin/request/updaterequest.component';
import { IndexRequestComponent } from './admin/request/indexrequest.component';
import { CreateRoleComponent } from './admin/role/createrole.component';
import { IndexRoleComponent } from './admin/role/indexrole.component';
import { UpdateRoleComponent } from './admin/role/updaterole.component';
import { DetailRoleComponent } from './admin/role/detailrole.component';
import { CreateRoleClaimComponent } from './admin/roleclaim/createroleclaim.component';
import { DetailRoleClaimComponent } from './admin/roleclaim/detailroleclaim.component';
import { UpdateRoleClaimComponent } from './admin/roleclaim/updateroleclaim.component';
import { IndexRoleClaimComponent } from './admin/roleclaim/indexroleclaim.component';
import { LayoutHomeComponent } from './home/layouthome.component';
import { ForgotPasswordComponent } from './home/forgot/forgotpassword.component';
import { ErrorComponent } from './home/404/404.component';
import { authGuard } from './guard/auth.guard';
import { Admin } from './services/checkAdmin.service';

const routes: Routes = [
  {path: 'error', component:ErrorComponent},
  {path: '', component:LayoutHomeComponent,children: [
    {path: '', component:IndexHomeComponent},
    {path: 'forgot', component:ForgotPasswordComponent},
  ]},

  {path:'error',component:ErrorComponent}
  ,
  {path: 'admin', component:IndexAdminComponent,canActivate:[authGuard],children: [
    {path:'',component:IndexAccountComponent},
    {path:'account',children: [
      {path: 'create', component:CreateAccountComponent},
      {path: 'detail/:id', component:DetailAccountComponent},
      {path: 'update/:id', component:UpdateAccountComponent},
      {path: 'index', component:IndexAccountComponent},
      {path:'',component:IndexAccountComponent},
    ]},
    {path:'department',children: [
      {path: 'create', component:CreateDepartmentComponent},
      {path: 'detail', component:DetailDepartmentComponent},
      {path: 'update', component:UpdateDepartmentComponent},
      {path: 'index', component:IndexDepartmentComponent},
      {path: '', component:IndexDepartmentComponent},
    ]},
    {path:'request',children: [
      {path: 'create', component:CreateRequestComponent},
      {path: 'detail/:id', component:DetailRequestComponent},
      {path: 'update/:id', component:UpdateRequestComponent},
      {path: 'index', component:IndexRequestComponent},
      {path: '', component:IndexRequestComponent},
    ]},
    {path:'role',children: [
      {path: 'create', component:CreateRoleComponent},
      {path: 'detail', component:DetailRoleComponent},
      {path: 'update', component:UpdateRoleComponent},
      {path: 'index', component:IndexRoleComponent},
      {path: '', component:IndexRoleComponent},
    ]},
    {path:'roleclaim',children: [
      {path: 'create', component:CreateRoleClaimComponent},
      {path: 'detail', component:DetailRoleClaimComponent},
      {path: 'update', component:UpdateRoleClaimComponent},
      {path: 'index', component:IndexRoleClaimComponent},
    ]},
    { path: '**', pathMatch: 'full',
    component: ErrorComponent },



    // {path: '', component:DashboardComponent},
  ]} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

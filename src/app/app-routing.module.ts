import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexHomeComponent } from './home/indehome.component';
import { IndexAdminComponent } from './admin/indeadmin.component';
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

const routes: Routes = [
  {path: '', component:IndexHomeComponent},
  {path: 'admin', component:IndexAdminComponent,children: [
    {path: 'account/create', component:CreateAccountComponent},
    {path: 'account/detail', component:DetailAccountComponent},
    {path: 'account/update', component:UpdateAccountComponent},
    {path: 'account/index', component:IndexAccountComponent},
    {path: 'department/create', component:CreateDepartmentComponent},
    {path: 'department/detail', component:DetailDepartmentComponent},
    {path: 'department/update', component:UpdateDepartmentComponent},
    {path: 'department/index', component:IndexDepartmentComponent},
    {path: 'request/create', component:CreateRequestComponent},
    {path: 'request/detail', component:DetailRequestComponent},
    {path: 'request/update', component:UpdateRequestComponent},
    {path: 'request/index', component:IndexRequestComponent},
    {path: 'role/create', component:CreateRoleComponent},
    {path: 'role/detail', component:DetailRoleComponent},
    {path: 'role/update', component:UpdateRoleComponent},
    {path: 'role/index', component:IndexRoleComponent},
    {path: 'roleclaim/create', component:CreateRoleClaimComponent},
    {path: 'roleclaim/detail', component:DetailRoleClaimComponent},
    {path: 'roleclaim/update', component:UpdateRoleClaimComponent},
    {path: 'roleclaim/index', component:IndexRoleClaimComponent},
    // {path: '', component:DashboardComponent},
  ]} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

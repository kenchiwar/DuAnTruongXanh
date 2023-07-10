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
    // {path: '', component:DashboardComponent},
  ]} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

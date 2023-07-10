import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexHomeComponent } from './home/indehome.component';
import { IndexAdminComponent } from './admin/indeadmin.component';
import { CreateAccountComponent } from './admin/account/createaccount.component';
import { DetailAccountComponent } from './admin/account/detailaccount.component';
import { UpdateAccountComponent } from './admin/account/updateaccount.component';
import { IndexAccountComponent } from './admin/account/indexaccount.component';

const routes: Routes = [
  {path: '', component:IndexHomeComponent},
  {path: 'admin', component:IndexAdminComponent,children: [
    {path: 'account/create', component:CreateAccountComponent},
    {path: 'account/detail', component:DetailAccountComponent},
    {path: 'account/update', component:UpdateAccountComponent},
    {path: 'account/index', component:IndexAccountComponent},
    // {path: '', component:DashboardComponent},
  ]} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { Component, OnInit, } from "@angular/core";
import {  FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { Department } from "src/app/models/department.model";
import { Role } from "src/app/models/role.model";

import { AccountService } from "src/app/services/account.service";
import { ValidatorData } from "src/app/services/validatorData.service";
@Component({
       templateUrl : './createaccout.component.html'

})
export class CreateAccountComponent implements OnInit {

    constructor(
      private accountService: AccountService,
      public validationService: ValidatorData,
      private router:Router ,
    ){}
       formGroup : FormGroup;
       roles:Role[];
       departments:Department[];
       selectedFileUrl: string = '';
       fileData:File;
       accountLogin : Account;
       isLoading : boolean = false;
    ngOnInit(): void {
      this.isLoading = false ;
      this.selectedFileUrl = '';
      this.accountService.GetAllDepartment().then((department=>{
        this.accountService.GetAllRoles().then(role=>{
            this.accountLogin=this.accountService.GetAccountLogin();
          this.roles = role as Role[];
          //Kiểm tra coi roles có hợp lý hay ko để phân quyền
           this.roles=  this.roles.filter(valueRole=>valueRole.id >this.accountLogin.idRole);
          this.departments = department as Department[];
          this.formGroup=this.accountService.getFormGroup();

          console.log(this.accountLogin);
          console.log(this.roles);
          console.log(this.departments);
         this.departments.forEach(department=>{
          console.log(department);
         })

        }).catch(error=>{
            this.validationService.getErrorRouterChange("Can not load this page ");
        });
          })).catch(error=>{
            this.validationService.getErrorRouterChange("Can not load thí page ");
          });




     // this.validationService.getErrorAddClass('username',this.formGroup);
 //    this.validationService.getErrorText('username','username',this.formGroup);
    }
    onSubmit(){
      // for (const field in this.formGroup.controls) {
      //   const control = this.formGroup.get(field);
      //   control.markAsDirty();
      //   control.markAsTouched();
      // }
      // //kiểm tra coi
      // if (!this.formGroup.valid) return ;
      this.isLoading=true;
      if(!this.validationService.checkFormGroupSubmit(this.formGroup)) return;

      this.accountService.PostAccount(this.formGroup.getRawValue() as Account,this.fileData)
      .then(success=>{

      }).finally(()=>{
        setTimeout(()=>{
          this.isLoading=false;
        },2000);
      });





    }

    handleFileSelect(event: any) {
      const fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        this.fileData = fileList[0];
        const fileReader: FileReader = new FileReader();

        fileReader.addEventListener('load', () => {
          this.selectedFileUrl = fileReader.result as string;
        });

        fileReader.readAsDataURL(this.fileData);
      } else {
        this.selectedFileUrl = '';
      }
    }
    reload(){
      this.ngOnInit();
    }
}

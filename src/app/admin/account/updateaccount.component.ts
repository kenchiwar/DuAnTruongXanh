import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { Department } from "src/app/models/department.model";
import { Requet } from "src/app/models/request.model";
import { ResultAPI } from "src/app/models/resultapi";
import { Role } from "src/app/models/role.model";
import { RoleClaim } from "src/app/models/roleclaim.model";

import { AccountService } from "src/app/services/account.service";
import { UrlApi } from "src/app/services/baseurl.services";
import { RegexApi } from "src/app/services/regex.service";
import { ValidatorData } from "src/app/services/validatorData.service";
@Component({
       templateUrl : './updateaccout.component.html'

})
export class UpdateAccountComponent implements OnInit {

    constructor(
      private accountService: AccountService,
      public validationService: ValidatorData,
      private router:ActivatedRoute ,
      private regex:RegexApi,
      private urlApi:UrlApi,

    ){}
    formGroup : FormGroup;
    roles:Role[];
    departments:Department[];
    selectedFileUrl: string = '';
    fileData:File;
    accountLogin : Account;
    isLoading : boolean ;
     isEmailConfirm :boolean  ;
     id:string ;
     //nơi lưa trữ data
     dataAccount :Account;
     //hiện ra html roleClaimStatus
      roleClaimStatus:boolean;
      formGroupClaimAdmin:FormGroup;
      roleClaims:RoleClaim[];
      //met
      roleClaimResult:{Role:RoleClaim ,select:boolean}[];
    ngOnInit(): void {
      this.isLoading = false ;
      this.isEmailConfirm =false ;
      this.selectedFileUrl = '';
      this.roleClaimResult=[];
      //Lấy id
     this.id = this.router.snapshot.paramMap.get('id') ;
     //Kiểm tra id có đúng là int ko
     if(!this.regex.Interger.test(this.id)) this.validationService.getErrorRouterChange("Url can not  found");


     this.accountService.GetAccount(this.id).then(dataAccount=>{
      this.accountService.GetAllDepartment().then((department=>{
        this.accountService.GetAllRoles().then(role=>{
          this.accountService.getAllRoleCliam().then(roleClaim=>{

            this.dataAccount = dataAccount as Account;
            this.accountLogin=this.accountService.GetAccountLogin();
            //Kiểm tra account đủ quyền update ko
            if(!(this.accountLogin.idRole<this.dataAccount.idRole)) this.validationService.getErrorRouterChange("Can not have permission");
            //Kiểm tra coi ng dùng phải admin ko
            this.roleClaimStatus=this.dataAccount.idRole<=2;




            this.selectedFileUrl=this.dataAccount.citizenidentification?this.urlApi.baseUrl+this.dataAccount.citizenidentification:null;
          this.roles = role as Role[];
          //Kiểm tra coi roles có hợp lý hay ko để phân quyền
          this.roles=  this.roles.filter(valueRole=>valueRole.id >this.accountLogin.idRole);
          this.departments = department as Department[];
          this.roleClaims = roleClaim as RoleClaim[];
          this.formGroup=this.accountService.getFormGroup(this.dataAccount);




          try {




            this.roleClaims.forEach(chan => {

              this.roleClaimResult.push({Role: chan,
                select:  this.dataAccount.idRoleClaims?.some(r=>r.id==chan.id)??false

              });

            });
          } catch (error) {
            console.log('An error occurred:', error);
          }
         // console.log(this.roleClaimResult);

          }).catch(error=>{
            this.validationService.getErrorRouterChange("Can not load roleClaim database ");
          });
        }).catch(error=>{
            this.validationService.getErrorRouterChange("Can not load roles ");
        });
          })).catch(error=>{
            this.validationService.getErrorRouterChange("Can not load this department ");
          });

     }).catch(error=>{
      this.validationService.getErrorRouterChange("Can not load this account ");
     });
     // this.validationService.getErrorAddClass('username',this.formGroup);
 //    this.validationService.getErrorText('username','username',this.formGroup);
    }
    onSubmit(){
      for (const field in this.formGroup.controls) {
        const control = this.formGroup.get(field);
        control.markAsDirty();
        control.markAsTouched();
      }
      //kiểm tra coi
      if (!this.formGroup.valid) return ;


     if(!this.validationService.checkFormGroupSubmit(this.formGroup)) return;

     this.isLoading=true;
      var account = this.formGroup.value as Account ;
      this.accountService.CheckEmailExists(account.username,this.id).then(resultEmail=>{
        this.isEmailConfirm=resultEmail as boolean ;
        if(!this.isEmailConfirm){
          var dataRoleClaim = [];

          this.roleClaimResult.forEach(chan=>{
            if(chan.select) dataRoleClaim.push(chan.Role.id);

          })

          this.accountService.PutAccount(account,this.fileData,this.id
            ,dataRoleClaim
            )
          .then(success=>{
              var result = success as ResultAPI;
              if(result.result){
                this.reload();
                this.validationService.getNotification(result.result,"Add Account Successufully?");
              }else{
                this.validationService.getNotification(result.result,"Add Account Error?");
              }


          });

        }else{
          this.validationService.getNotification(this.isEmailConfirm,"UserName is Exists ");
        }



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

    roleSelect(element:any){
          this.roleClaimStatus=+element.target.value<=2;

    }

}

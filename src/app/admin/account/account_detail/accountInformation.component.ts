
import { Component, OnInit, ViewChild, } from "@angular/core";
import {  FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { Department } from "src/app/models/department.model";
import { Requet } from "src/app/models/request.model";
import { ResultAPI } from "src/app/models/resultapi";
import { Role } from "src/app/models/role.model";
import { RoleClaim } from "src/app/models/roleclaim.model";

import { AccountService } from "src/app/services/account.service";
import { UrlApi } from "src/app/services/baseurl.services";
import { ValidatorData } from "src/app/services/validatorData.service";
import { loginAccount } from "../login/loginAccount.component";
declare var $ : any;
@Component({
       templateUrl : './accountInformation.conponent.html',
       selector:'<account_information></account_information>'

})
export class DetailAccountInformationComponent implements OnInit {

    constructor(
      private accountService: AccountService,
      public validationService: ValidatorData,
      private router:Router ,
      private urlApi:UrlApi,
    ){}

    selectedFileUrl: string = '';

    accountLogin : Account;
    dataAccount :Account;
    fileData:File;
    //hiện ra html roleClaimStatus
     roleClaimStatus:boolean;
     formGroupClaimAdmin:FormGroup;
     roleClaims:RoleClaim[];
     //met
     requetIdComplainNavigations:Requet[];
     requetIdHandleNavigations:Requet[];


     //code ở disabled code
     changePass :boolean;
     password :string;
     checkPassword:boolean;
          //
      accountChangPass:boolean;
      @ViewChild('met') loginAccountTag :loginAccount;

    ngOnInit(): void {
          this.selectedFileUrl = '';
          this.requetIdComplainNavigations=[];
          this.requetIdHandleNavigations=[];
          this.accountLogin = this.accountService.GetAccountLogin() as Account;
      
       
         
          this.changePass=false;
          this.password='';
          this.checkPassword=true;
              //
              this.accountChangPass=false;
      this.accountService.GetAccountDetail(this.accountLogin.id+'').then(dataAccount=>{

        
        this.dataAccount = dataAccount as Account;
        this.accountLogin=this.accountService.GetAccountLogin();
        //Kiểm tra account đủ quyền update ko
        if(this.dataAccount==null) this.validationService.getErrorRouterChange("Can not load data ! ");
        //Kiểm tra coi ng dùng phải admin ko
      this.selectedFileUrl=this.dataAccount.citizenidentification?this.urlApi.baseUrl+this.dataAccount.citizenidentification:null;
      this.requetIdComplainNavigations=this.dataAccount.requetIdComplainNavigations ;
      this.requetIdHandleNavigations=this.dataAccount.requetIdHandleNavigations;
      console.log('ee'+this.dataAccount)
      if ($.fn.DataTable.isDataTable($('#account-detail-roleclaims'))) {
        $('#account-detail-roleclaims').DataTable().destroy();
      }
      if ($.fn.DataTable.isDataTable($('#account-detail-request1'))) {
        $('#account-detail-request1').DataTable().destroy();
      }
      if ($.fn.DataTable.isDataTable($('#account-detail-request2'))) {
        $('#account-detail-request2').DataTable().destroy();
      }
      setTimeout(()=>{
        $('#account-detail-roleclaims').DataTable({
          "order" : [[ 1, 'desc' ]],
          "paging": true,
          "lengthChange": false,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": true,
          "responsive": true,          
          "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
        }).buttons().container().appendTo('#account-detail-roleclaims_wrapper .col-md-6:eq(0)');
        $('#account-detail-request1').DataTable({
          "order" : [[ 1, 'desc' ]],
          "paging": true,
          "lengthChange": false,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": true,
          "responsive": true,          
          "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
        }).buttons().container().appendTo('#account-detail-request1_wrapper .col-md-6:eq(0)');
        $('#account-detail-request2').DataTable({
          "order" : [[ 1, 'desc' ]],
          "paging": true,
          "lengthChange": false,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": true,
          "responsive": true,          
          "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
        }).buttons().container().appendTo('#account-detail-request2_wrapper .col-md-6:eq(0)');
      },1000);


      }).catch(error=>{
        this.validationService.getErrorRouterChange("Can not load data !");

      })





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
        this.accountService.ChangImage(this.fileData);
      } else {
        this.selectedFileUrl = '';
      }
    }

    reload(){
      this.ngOnInit();
    }
    searchrequetIdComplainNavigations(element:any){

    }
    seracrrequetIdHandleNavigations(element:any){

    }
    changePassword(){

      this.checkPassword=true;
      this.changePass=true;



    }
    checkPass(){
  
     

      if(this.password == this.accountLogin.password) {

        this.accountChangPass=true;

        this.accountChangPass=true;


       try {
        setTimeout(()=>{
          this.loginAccountTag.viewChildPage(this.accountLogin.username);
        },100);
       } catch (error) {
        this.validationService.getNotification(false,'can not load account login');
       }


      }else{
        this.checkPassword=false;
      }

    }
    isAdmin(): boolean {
      return this.router.url.startsWith('/admin');
    }

}

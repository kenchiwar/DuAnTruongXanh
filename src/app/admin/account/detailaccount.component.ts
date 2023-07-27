import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormGroup } from "@angular/forms";
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
declare var $ : any;
@Component({
       templateUrl : './detailaccout.component.html'

})
export class DetailAccountComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    public validationService: ValidatorData,
    private router:ActivatedRoute ,
    private regex:RegexApi,
    private urlApi:UrlApi,

  ){}

  selectedFileUrl: string = '';

  accountLogin : Account;


   id:string ;
   //nơi lưa trữ data
   dataAccount :Account;
   //hiện ra html roleClaimStatus
    roleClaimStatus:boolean;
    formGroupClaimAdmin:FormGroup;
    roleClaims:RoleClaim[];
    //met
    requetIdComplainNavigations:Requet[];
    requetIdHandleNavigations:Requet[];
  ngOnInit(): void {


    this.selectedFileUrl = '';
    this.requetIdComplainNavigations=[];
    this.requetIdHandleNavigations=[];
    //Lấy id
   this.id = this.router.snapshot.paramMap.get('id') ;
   setTimeout(()=>{
    $('#detail-account-role-claims').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true,
      "responsive": true,          
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    $('#detail-account-request1').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true,
      "responsive": true,          
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    $('#detail-account-request2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true,
      "responsive": true,          
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
  },1000);
   //Kiểm tra id có đúng là int ko
   if(!this.regex.Interger.test(this.id)) this.validationService.getErrorRouterChange("Url can not  found");


   this.accountService.GetAccountDetail(this.id).then(dataAccount=>{


          this.dataAccount = dataAccount as Account;
          this.accountLogin=this.accountService.GetAccountLogin();
          //Kiểm tra account đủ quyền update ko
          if(!(this.accountLogin.idRole<this.dataAccount.idRole )||this.dataAccount==null) this.validationService.getErrorRouterChange("Can not have permission");
          //Kiểm tra coi ng dùng phải admin ko
        this.selectedFileUrl=this.dataAccount.citizenidentification?this.urlApi.baseUrl+this.dataAccount.citizenidentification:null;
        this.requetIdComplainNavigations=this.dataAccount.requetIdComplainNavigations ;
        this.requetIdHandleNavigations=this.dataAccount.requetIdHandleNavigations;






       // console.log(this.roleClaimResult);

        }).catch(error=>{
          this.validationService.getErrorRouterChange("Can not load  database ");
        });

   // this.validationService.getErrorAddClass('username',this.formGroup);
//    this.validationService.getErrorText('username','username',this.formGroup);
  }

  reload(){
    this.ngOnInit();
  }
  searchrequetIdComplainNavigations(element:any){

  }
  seracrrequetIdHandleNavigations(element:any){

  }


}

import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";

import { isEmpty } from "rxjs";
import { Account } from "src/app/models/account.model";
import { AccountService } from "src/app/services/account.service";
import { UrlApi } from "src/app/services/baseurl.services";

import { ValidatorData } from "src/app/services/validatorData.service";
@Component({
       templateUrl : './indexaccount.component.html'

})
export class IndexAccountComponent implements OnInit {
  [x: string]: any;

    constructor(
        private router :Router,
        private accountService :AccountService,

        public validatorService:ValidatorData,
        private urlApi:UrlApi,
    ){}
    dataAccounts:Account[];
    dataAll:Account[];
      urlImg:string;
      textSearch:string;
      statusSearch:boolean;
      accountLogin:Account;
      isLoading:boolean;
    ngOnInit(): void {
      this.loadScript('assets/fileadmin/dist/js/main.js');
      // this.loadScript('assets/fileadmin/dist/js/chart.js');
      this.textSearch='';
      this.isLoading=false;
      this.statusSearch=false;
      this.urlImg=this.urlApi.baseUrl;
        this.accountService.getAll().then(dataAccount=>{
          this.dataAll = dataAccount as Account[];
          this.dataAccounts=this.dataAll;
          this.accountLogin=this.accountService.GetAccountLogin();
        }).catch(error => {
              this.validatorService.getErrorRouterChange("Can't load the data Account");
        });


    }
    delete(id:number,mess:string ):void {
        if(!confirm(`Are you sure you want to delete `+mess)) return ;
        this.isLoading=true;
        try {
          var account = this.dataAccounts.find(a=>a.id==id);


          if(!(this.accountLogin.idRole<account.idRole)) {
            alert('Don\'t permission');
            setTimeout(()=>{
              this.isLoading=false;
            },2000);
              return ;
          }

          this.accountService.DeleteAccount(id+'').then(success=>{
                this.validatorService.getNotification(true,'Delete Success');
          }).catch(error=>{
            this.validatorService.getNotification(false,"Delete not succes",error);

          })
          .finally(()=>{
            setTimeout(()=>{
              this.isLoading=false;
            },2000);

          });
        } catch (error) {

          this.validatorService.getNotification(false,"Delete not succes",error);
          setTimeout(()=>{
            this.isLoading=false;
          },2000);

        }



    }
    update(id:number):void {

    }
    details(id:number):void {



    }
    search(){

    }
    reload(){
      this.ngOnInit();
    }
  
   
  loadScript(url: string) {
      const script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    }
  
  
}

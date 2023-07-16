import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
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

    constructor(
        private router :Router,
        private accountService :AccountService,
        public validatorService:ValidatorData,
        private urlApi:UrlApi,
    ){}
    dataAccounts:Account[];
    dataAll:Account[];
      urlImg:string;
    ngOnInit(): void {
      this.urlImg=this.urlApi.baseUrl;
        this.accountService.getAll().then(dataAccount=>{
          this.dataAll = dataAccount as Account[];
          this.dataAccounts=this.dataAll;
        }).catch(error => {
              this.validatorService.getErrorRouterChange("Can't load the data Account");
        });


    }
    delete(id:number):void {

    }
    update(id:number):void {

    }
    details(id:number):void {

    }

}

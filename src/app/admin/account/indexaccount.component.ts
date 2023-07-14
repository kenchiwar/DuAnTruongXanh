import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { AccountService } from "src/app/services/account.service";
import { ValidatorData } from "src/app/services/validatorData.service";
@Component({
       templateUrl : './indexaccount.component.html'

})
export class IndexAccountComponent implements OnInit {

    constructor(
        private router :Router,
        private accountService :AccountService,
        public validatorService:ValidatorData
    ){}
    dataAccounts:Account[];
    ngOnInit(): void {
        this.accountService.getAll().then(dataAccount=>{
          this.dataAccounts = dataAccount as Account[];
        }).catch(error => {

        });
    }
    delete(id:number):void {

    }
    update(id:number):void {

    }
    details(id:number):void {
      
    }

}

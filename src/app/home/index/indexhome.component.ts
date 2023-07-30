import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { AccountService } from "src/app/services/account.service";
@Component({
        selector : 'layout-content',
       templateUrl : './indexhome.component.html'
})
export class IndexHomeComponent implements OnInit {
   
    constructor(
        private router :Router,
        private accountService :AccountService
    ){}
    accountLogin:Account;
    ngOnInit(): void {
        try {
            this.accountLogin = this.accountService.GetAccountLogin();
        } catch (error) {
            
        }
    }
    
}
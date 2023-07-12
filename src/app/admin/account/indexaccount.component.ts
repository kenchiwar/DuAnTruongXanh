import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "src/app/services/account.service";
@Component({
       templateUrl : './indexaccount.component.html'

})
export class IndexAccountComponent implements OnInit {

    constructor(
        private router :Router,
        private accountService :AccountService,
    ){}
    ngOnInit(): void {

    }

}

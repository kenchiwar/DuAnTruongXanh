
import { Component, OnInit, } from "@angular/core";
import {  FormGroup } from "@angular/forms";

import { AccountService } from "src/app/services/account.service";
@Component({
       templateUrl : './createaccout.component.html'

})
export class CreateAccountComponent implements OnInit {

    constructor(
      private accountService: AccountService,
    ){}
       formGroup : FormGroup;
    ngOnInit(): void {
      this.formGroup=this.accountService.getFormGroup();

    }
    onSubmit(){

    }
}

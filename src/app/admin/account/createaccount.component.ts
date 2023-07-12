
import { Component, OnInit, } from "@angular/core";
import {  FormGroup } from "@angular/forms";

import { AccountService } from "src/app/services/account.service";
import { ValidatorData } from "src/app/services/validatorData.service";
@Component({
       templateUrl : './createaccout.component.html'

})
export class CreateAccountComponent implements OnInit {

    constructor(
      private accountService: AccountService,
      public validationService: ValidatorData,
    ){}
       formGroup : FormGroup;
    ngOnInit(): void {
      this.formGroup=this.accountService.getFormGroup();
     // this.validationService.getErrorAddClass('username',this.formGroup);
     this.validationService.getErrorText('username','username',this.formGroup);
    }
    onSubmit(){
      for (const field in this.formGroup.controls) {
        const control = this.formGroup.get(field);
        control.markAsDirty();
        control.markAsTouched();
      }
      if (this.formGroup.valid) {
        // submit form
      }
      alert('ffff');
    }
}

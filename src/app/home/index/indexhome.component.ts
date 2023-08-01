import { Component, OnInit, } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { Requet } from "src/app/models/request.model";
import { Requetsdetailed } from "src/app/models/requetsdetailed.model";
import { RequetsdetailedRep11 } from "src/app/models/requetsdetailedRep11.model";
import { AccountService } from "src/app/services/account.service";
import { RequestServices } from "src/app/services/request.service";
@Component({
        selector : 'layout-content',
       templateUrl : './indexhome.component.html'
})
export class IndexHomeComponent implements OnInit {
   formRequest : FormGroup;
   formRequest_ : FormGroup;
    constructor(
        private router :Router,
        private accountService :AccountService,
        private requestService : RequestServices,
        private formBuilder : FormBuilder,
    ){}
    accountLogin:Account;
    ngOnInit(): void {
        try {
            this.accountLogin = this.accountService.GetAccountLogin();
            
        } catch (error) {
        }
        // this.formRequest = this.formBuilder.group({
        //     idComplain : 1,
        //     title : '',
        //     reason : '',
        //     reason_1: '',
        //     reason_2: '',
        // });

        this.formRequest_ = this.formBuilder.group({
            idComplain : 1,
            title : '',
            reason : '',
        });

    }

    requestNoAcc(){
        // if(this.accountLogin == null){
        //     var requestRep11 : RequetsdetailedRep11 = this.formRequest.value as RequetsdetailedRep11;
        //     requestRep11.reason = requestRep11.reason +"/"+requestRep11.reason_1+"/"+requestRep11.reason_2;

        //     var request : Requetsdetailed = this.formRequest_.value as Requetsdetailed;
        //     request.reason = requestRep11.reason;
        //     request.idRequestNavigation = requestRep11.idRequestNavigation;
        //     console.log(request);
            
        //     // var formData = new FormData();
        //     // formData.append('strRequest', JSON.stringify(request));
        //     // this.requestService.CreateRequestNoAcc(formData).then(
        //     //     res => {console.log(res);},
        //     //     err => {console.log(err);}
        //     // )
        // }
        
        
    }
    
}
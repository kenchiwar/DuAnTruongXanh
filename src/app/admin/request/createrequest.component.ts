import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { Department } from "src/app/models/department.model";
import { AccountService } from "src/app/services/account.service";
import { DepartmentsServices } from "src/app/services/departments.service";
import { RequestServices } from "src/app/services/request.service";
@Component({
        selector: 'app-request',
       templateUrl : './createrequest.component.html'
       
})
export class CreateRequestComponent implements OnInit {
   formRequest : FormGroup;
   requests : Request[]
    account : Account
    departments : Department[]
    selectOption: string = '0'
    constructor(
        private router :Router,
        private requestService : RequestServices,
        private activatedRoute : ActivatedRoute,
        private accountService : AccountService,
        private departmentService : DepartmentsServices
        
    ){}
    ngOnInit(): void {

        this.requestService.GetRequets().then(
            res => {this.requests = res as Request[];},
            err => {console.log(err)}
        ),
        this.departmentService.GetDepartment().then(
            res => {this.departments = res as Department[];},
            err => {console.log(err)}
        )
        this.formRequest = this.requestService.getFormGroup();
       this.account = this.accountService.GetAccountLogin()
    }
    
    createdRequest(){

    }
}
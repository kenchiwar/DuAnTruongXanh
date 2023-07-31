import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { Department } from "src/app/models/department.model";
import { DepartmentsServices } from "src/app/services/departments.service";
@Component({
       templateUrl : './detaildepartment.component.html'
       
})
export class DetailDepartmentComponent implements OnInit {
   department : Department
    account : Account
    constructor(
        private router :Router,
        private departmentService : DepartmentsServices,
        private activatedRoute : ActivatedRoute
    ){}
    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            var id = params.get('id');
            this.departmentService.GetDepartmentById(id).then(
                res => {this.department = res as Department},
                err => {console.log(err);}
            )

            this.departmentService.GetAccDepartmentById(id).then(
                res => {this.account = res as Account
                console.log(this.account)},
                err => {console.log(err);}
            )
        })
    }
    
}
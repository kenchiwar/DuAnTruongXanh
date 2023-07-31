import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Department } from "src/app/models/department.model";
import { RoleClaim } from "src/app/models/roleclaim.model";
import { DepartmentsServices } from "src/app/services/departments.service";
import { RoleClaimsServices } from "src/app/services/roleclaims.service";
@Component({
       templateUrl : './detailroleclaim.component.html'
       
})
export class DetailRoleClaimComponent implements OnInit {
   roleClaim : RoleClaim
    department : Department;
    constructor(
        private router :Router,
        private activatedRoute : ActivatedRoute,
        private roleClaimService : RoleClaimsServices,
        private departmentService : DepartmentsServices
    ){}
    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            var id = params.get('id');
            this.roleClaimService.GetRoleClaimById(id).then(
                res => {
                    this.roleClaim = res as RoleClaim;
                    
                },
                err => {console.log(err);}
            )

            // this.departmentService.GetAccDepartmentById().then()
        })
    }
    
}
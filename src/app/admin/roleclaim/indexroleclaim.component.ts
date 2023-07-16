import { Department } from 'src/app/models/department.model';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RoleClaim } from "src/app/models/roleclaim.model";
import { DepartmentsServices } from "src/app/services/departments.service";
import { RoleClaimsServices } from "src/app/services/roleclaims.service";
@Component({
       templateUrl : './indexroleclaim.component.html'
       
})
export class IndexRoleClaimComponent implements OnInit {
    roleClaims : RoleClaim[];
    departments : Department[];
    constructor(
        private router :Router,
        private roleClaimService : RoleClaimsServices,
        private departmentService : DepartmentsServices
    ){}
    ngOnInit(): void {
        this.roleClaimService.GetRoleClaims().then(
            res => {this.roleClaims = res as RoleClaim[];},
            err => console.log(err)
        )
        
    }
    
}
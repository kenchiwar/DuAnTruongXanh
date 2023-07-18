import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Department } from "src/app/models/department.model";
import { ResultAPI } from "src/app/models/resultapi";
import { RoleClaim } from "src/app/models/roleclaim.model";
import { DepartmentsServices } from "src/app/services/departments.service";
import { RoleClaimsServices } from "src/app/services/roleclaims.service";
@Component({
       templateUrl : './createroleclaim.component.html'
       
})
export class CreateRoleClaimComponent implements OnInit {
   formRoleClaim : FormGroup
   roleClaims : RoleClaim[];
    departments : Department[];

    constructor(
        private router :Router,
        private roleClaimSerVice : RoleClaimsServices,
        private departmentService : DepartmentsServices
    ){}
    ngOnInit(): void {
        this.formRoleClaim = this.roleClaimSerVice.getFormGroup();
        this.departmentService.GetDepartment().then(
            res => {this.departments = res as Department[]},
            err => console.log(err)
        )
    }
    
    createRoleClaim(){
        var roleClaim : RoleClaim = this.formRoleClaim.value as RoleClaim;
        var formData = new FormData();
        formData.append('strRoleClaim', JSON.stringify(roleClaim));
        this.roleClaimSerVice.PostRoleClaim(formData).then(
            res => {
                var resultAPI : ResultAPI= res as ResultAPI;
                if(resultAPI.result){
                    
                    this.router.navigateByUrl('/admin/roleclaim/create', { skipLocationChange: true }).then(() => {
                        this.router.navigate([this.router.url]);
                      });
                    this.ngOnInit();
                }else{alert(`Created RoleClaim Failed`);}
            },
            err => {console.log(err);}
        )
    }
}
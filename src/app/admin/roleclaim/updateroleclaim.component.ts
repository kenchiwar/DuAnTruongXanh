import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Department } from "src/app/models/department.model";
import { ResultAPI } from "src/app/models/resultapi";
import { RoleClaim } from "src/app/models/roleclaim.model";
import { DepartmentsServices } from "src/app/services/departments.service";
import { RoleClaimsServices } from "src/app/services/roleclaims.service";
@Component({
       templateUrl : './updateroleclaim.component.html'
       
})
export class UpdateRoleClaimComponent implements OnInit {
    roleClaim : RoleClaim;
    departments : Department[];
    formRoleClaim : FormGroup
    constructor(
        private router :Router,
        private roleClaimService : RoleClaimsServices,
        private departmentService : DepartmentsServices,
        private activatedRoute : ActivatedRoute,
    ){}
    ngOnInit(): void {
        this.departmentService.GetDepartment().then(
            res => {
                this.departments = res as Department[];
            },err => {console.log(err);}
        );
        this.activatedRoute.paramMap.subscribe(params => {
            var id = params.get('id');
            this.roleClaimService.GetRoleClaimById(id).then(
                res => {
                    this.roleClaim = res as RoleClaim;
                    this.formRoleClaim = this.roleClaimService.getFormGroupData(this.roleClaim);
                }, err => console.log(err)
            )
        })
    }
    
    updateRoleClaim(){
        var roleClaim_ : RoleClaim = this.formRoleClaim.value as RoleClaim;
        var formData = new FormData();
        roleClaim_.id = this.roleClaim.id;
        formData.append('strRoleClaim', JSON.stringify(roleClaim_));
        this.roleClaimService.PutRoleClaim(formData).then(
            res => {
                var resultAPI : ResultAPI = res as ResultAPI;
                if(resultAPI.result){
                    // this.router.navigateByUrl('/admin/roleclaim/update/').then(() => {
                    //     this.router.navigate([this.router.url]);
                    // });
                    this.router.navigate(['/admin/roleclaim/update', roleClaim_.id]);
                    // this.ngOnInit();
                }else {
                    alert(`Update role claim failed`);
                }
            }, err => console.log(err)
        )
    }
}
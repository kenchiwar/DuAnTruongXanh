import { Department } from './../../models/department.model';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ResultAPI } from 'src/app/models/resultapi';
import { DepartmentsServices } from 'src/app/services/departments.service';
@Component({
       templateUrl : './updatedepartment.component.html'
       
})
export class UpdateDepartmentComponent implements OnInit {
   formDepartment : FormGroup;
   departments : Department[];
   department_ : Department;
    constructor(
        private departmentService : DepartmentsServices,
        private router :Router,
        
    ){}
    ngOnInit(): void {
        this.formDepartment = this.departmentService.getFormGroup();

        this.departmentService.GetDepartment().then(
            res => {
                this.departments = res as Department[];
            },err => {console.log(err);}
        );
        
        
    }

    updatedDepartment(){
        var department : Department = this.formDepartment.value as Department;
        var formData = new FormData();
        department.id = this.department_.id;
        formData.append('strDepartment', JSON.stringify(department));
        this.departmentService.PutDepartment(formData).then(
            res => {
                var resultAPI : ResultAPI = res as ResultAPI;
                if(resultAPI.result){
                    this.router.navigateByUrl('/admin/department/update', { skipLocationChange: true }).then(() => {
                        this.router.navigate([this.router.url]);
                      });
                      
                      this.ngOnInit();
                }else {
                    alert('Edit failed!');
                }
            },err => {console.log(err);}
        )
    }

    getDepartment(evt: any){
        var id = evt.target.value;
        this.departmentService.GetDepartmentById(id).then(
            res => {
                this.department_ = res as Department;
                this.formDepartment = this.departmentService.getFormGroupData(this.department_);
            },err => {console.log(err);}
        )
    }
    
}
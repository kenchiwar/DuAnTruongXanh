import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Department } from "src/app/models/department.model";
import { ResultAPI } from "src/app/models/resultapi";
import { DepartmentsServices } from "src/app/services/departments.service";
@Component({
       templateUrl : './createdepartment.component.html'
       
})
export class CreateDepartmentComponent implements OnInit {
    formDepartment: FormGroup;
    departments : Department[];

    constructor(
        private router :Router,
        private departmentService : DepartmentsServices,
        private formBuilder: FormBuilder
        
    ){}
    ngOnInit(): void {
       this.formDepartment = this.formBuilder.group({
        id: 0,
        tendepartment: '',
        describe : '',
        address :'',
        status : false,
        
       })
    }
    
    createdDepartment(){
        var department : Department = this.formDepartment.value as Department;
        var formData = new FormData();
        formData.append('strDepartment', JSON.stringify(department));
        this.departmentService.PostDepartment(formData).then(
            res => {
                var resultApi : ResultAPI = res as ResultAPI;
                if(resultApi.result){
                    this.router.navigate(['create']);
                }else alert("Add Department failed!");
            },
            err => {console.log(err);}
        )
    }
}
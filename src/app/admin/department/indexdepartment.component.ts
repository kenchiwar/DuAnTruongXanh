import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Department } from "src/app/models/department.model";
import { DepartmentsServices } from "src/app/services/departments.service";
declare var $ : any;

@Component({
       templateUrl : './indexdepartment.component.html'
       
})
export class IndexDepartmentComponent implements OnInit {
    formDepartment: FormGroup;
    departments : Department[];

    constructor(
        private router :Router,
        private departmentService : DepartmentsServices,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,

    ){}
    ngOnInit(): void {
       
       this.formDepartment = this.departmentService.getFormGroup();
        this.departmentService.GetDepartment().then(
            res => {this.departments = res as Department[];},
            err => {console.log(err);})
            setTimeout(()=>{
                $('#department-index-table').DataTable({
                  "paging": true,
                  "lengthChange": false,
                  "searching": true,
                  "ordering": true,
                  "info": true,
                  "autoWidth": true,
                  "responsive": true,          
                  "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
                }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');;
              },1000);
        
    }

    delete(id: any){
        this.activatedRoute.paramMap.subscribe(params => {
            var id_ = params.get('id');
           
            this.departmentService.DeleteDepartment(id).then(
                res => {this.ngOnInit();},
                err => {console.log(err)}
            )
        })
    }
    
}
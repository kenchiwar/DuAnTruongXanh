import { Department } from 'src/app/models/department.model';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RoleClaim } from "src/app/models/roleclaim.model";
import { DepartmentsServices } from "src/app/services/departments.service";
import { RoleClaimsServices } from "src/app/services/roleclaims.service";
declare var $ : any;

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
            res => {this.roleClaims = res as RoleClaim[];
                if ($.fn.DataTable.isDataTable($('#roleclaim-index-table'))) {
                    $('#roleclaim-index-table').DataTable().destroy();
                  }
              
                setTimeout(()=>{
                    $('#roleclaim-index-table').DataTable({
                      "paging": true,
                      "lengthChange": false,
                      "searching": true,
                      "ordering": true,
                      "info": true,
                      "autoWidth": true,
                      "responsive": true,          
                      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
                    }).buttons().container().appendTo('#roleclaim-index-table_wrapper .col-md-6:eq(0)');;
                  },1000);},
            err => console.log(err)
        )
       
    
        
    }
    
}
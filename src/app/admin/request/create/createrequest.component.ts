import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { Department } from "src/app/models/department.model";
import { Requet } from "src/app/models/request.model";
import { RequestFile } from "src/app/models/requestfile.model";
import { Requetsdetailed } from "src/app/models/requetsdetailed.model";
import { ResultAPI } from "src/app/models/resultapi";
import { AccountService } from "src/app/services/account.service";
import { DepartmentsServices } from "src/app/services/departments.service";
import { RequestServices } from "src/app/services/request.service";
import { RequestFileService } from "src/app/services/requestFile.service";

declare var $: any;
@Component({
        selector: 'app-createdRequest',
       templateUrl : './createrequest.component.html'
       
})
export class CreateRequestComponent implements OnInit {
   formRequest : FormGroup;
   formRequestFile : FormGroup;
   formRequestDetail: FormGroup;

   requests : Requet[]
    account : Account
    departments : Department[]
    selectOption: string = '0'
    file : File 
    files : File[]
    constructor(
        private router :Router,
        private requestService : RequestServices,
        private activatedRoute : ActivatedRoute,
        private accountService : AccountService,
        private departmentService : DepartmentsServices,
        private requestFileService : RequestFileService,
        
    ){}
    ngOnInit(): void {

        this.requestService.GetRequets().then(
            res => {this.requests = res as Requet[];},
            err => {console.log(err)}
        )
        setTimeout(()=>{
            $('#index-allRequest').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": true,
              "ordering": true,
              "info": true,
              "autoWidth": true,
              "responsive": true,          
              "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
            }).buttons().container().appendTo('#index-allRequest_wrapper .col-md-6:eq(0)');;
          },2000);
    }
}
import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { Department } from "src/app/models/department.model";
import { RequestFile } from "src/app/models/requestfile.model";
import { Requetsdetailed } from "src/app/models/requetsdetailed.model";
import { ResultAPI } from "src/app/models/resultapi";
import { AccountService } from "src/app/services/account.service";
import { DepartmentsServices } from "src/app/services/departments.service";
import { RequestServices } from "src/app/services/request.service";
import { RequestFileService } from "src/app/services/requestFile.service";
@Component({
        
       templateUrl : './createrequest.component.html'
       
})
export class _CreateRequestComponent implements OnInit {
   
    ngOnInit(): void {

       
    }
}
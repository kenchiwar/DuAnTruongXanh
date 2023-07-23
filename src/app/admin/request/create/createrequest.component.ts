import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { Department } from "src/app/models/department.model";
import { RequestFile } from "src/app/models/requestfile.model";
import { ResultAPI } from "src/app/models/resultapi";
import { AccountService } from "src/app/services/account.service";
import { DepartmentsServices } from "src/app/services/departments.service";
import { RequestServices } from "src/app/services/request.service";
import { RequestFileService } from "src/app/services/requestFile.service";
@Component({
        selector: 'app-request',
       templateUrl : './createrequest.component.html'
       
})
export class CreateRequestComponent implements OnInit {
   formRequest : FormGroup;
   formRequestFile : FormGroup;

   requests : Request[]
   id:number
    account : Account
    departments : Department[]
    selectOption: string = '0'
    file : File
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
            res => {this.requests = res as Request[];},
            err => {console.log(err)}
        ),
        this.departmentService.GetDepartment().then(
            res => {this.departments = res as Department[];},
            err => {console.log(err)}
        )
        this.formRequest = this.requestService.getFormGroup();
        this.formRequestFile = this.requestService.getFormGroupFile();
       this.account = this.accountService.GetAccountLogin()
    }
    
    createdRequest(){
        var request : Request = this.formRequest.value as Request;
        var formData = new FormData();
        formData.append('strRequest', JSON.stringify(request));
        if(this.file != null){
            this.requestService.PostRequest(formData).then(
                res => {
                    var resultAPI : ResultAPI = res as ResultAPI;
                    if(resultAPI.result){
                        this.router.navigate(['/admin/request/create']);
                    }else {
                        alert(`Request failed!`);
                    }
                }, err => console.log(err)
            );
            var requestFile : RequestFile = this.formRequestFile.value as RequestFile;
            var formData= new FormData();
            formData.append('name', this.file);
            formData.append('strRequestFile', JSON.stringify(requestFile));
                        this.requestService.PostRequestFile(formData).then(
                            res => {
                                var resultAPI : ResultAPI = res as ResultAPI;
                              if(resultAPI.result){
                                  this.router.navigate(['/admin/request/create']);
                              }else {alert(`Create file failed`);}
                            }, err => {console.log(err);}
                          );    
            
        }else {
            this.requestService.PostRequest(formData).then(
                res => {
                    var resultAPI : ResultAPI = res as ResultAPI;
                    if(resultAPI.result){
                        
                        this.router.navigate(['/admin/request/create']);
                        this.ngOnInit();
                        
                        
                    }else {
                        alert(`Request failed!`);
                    }
                }, err => console.log(err)
            );
        }


        
    }
    selectFile(evt : any){
        this.file = evt.target.files[0];
    }
}
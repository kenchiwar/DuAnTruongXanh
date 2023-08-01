import { Component, OnInit, } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { Department } from "src/app/models/department.model";
import { ResultAPI } from "src/app/models/resultapi";
import { AccountService } from "src/app/services/account.service";
import { DepartmentsServices } from "src/app/services/departments.service";
import { RequestServices } from "src/app/services/request.service";
import { RequestFileService } from "src/app/services/requestFile.service";
@Component({
        selector : 'layout-content',
       templateUrl : './create.component.html'
})
export class CreateRequestHomeComponent implements OnInit {
   
    formRequest : FormGroup;
    formRequestFile : FormGroup;
    formRequestDetail: FormGroup;
 
    requests : Request[]
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
             res => {this.requests = res as Request[];},
             err => {console.log(err)}
         ),
         this.departmentService.GetDepartment().then(
             res => {this.departments = res as Department[];},
             err => {console.log(err)}
         )
         this.formRequest = this.requestService.getFormGroup();
         this.formRequestFile = this.requestService.getFormGroupFile();
         this.formRequestDetail = this.requestService.getFormGroupDetail();
        this.account = this.accountService.GetAccountLogin()
     }
 
 
 createdRequest(){
     var request : Request = this.formRequest.value as Request;
     var formData = new FormData();
     if(this.file != null){
         for (let index = 0; index < this.files.length; index++) {
             this.file = this.files[index];
             formData.append('files', this.file);
         }
     }
     formData.append('strRequest', JSON.stringify(request));
    
     //nho .then()
     this.requestService.PostAccount(formData).then(
         res => {
             var resultAPI :ResultAPI = res as ResultAPI;
             if (resultAPI.result){
                 this.router.navigateByUrl('/login/profile', { skipLocationChange: true }).then(() => {
                     this.router.navigate([this.router.url]);
                   });
                   this.ngOnInit();
             }else{alert(`Created failed!`);}
         }, err => {console.log(err);}
     );
    
 }
 
     selectFile(evt : any){
         this.file = evt.target.files[0];
         this.files =evt.target.files;
     }
    
}
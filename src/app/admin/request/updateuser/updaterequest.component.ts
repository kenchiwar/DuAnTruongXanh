import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Department } from "src/app/models/department.model";
import { Requet } from "src/app/models/request.model";
import { RequestFile } from "src/app/models/requestfile.model";
import { Requetsdetailed } from "src/app/models/requetsdetailed.model";
import { ResultAPI } from "src/app/models/resultapi";
import { AccountService } from "src/app/services/account.service";
import { DepartmentsServices } from "src/app/services/departments.service";
import { RequestServices } from "src/app/services/request.service";
@Component({
    selector: 'app-updateUserRequest',
    templateUrl : './updaterequest.component.html'
       
})
export class UpdateUserRequestComponent implements OnInit {
    request : Requet
    requestDetail : Requetsdetailed
    departments : Department[]
    requestFile : RequestFile[]
    requestForm : FormGroup
    requestDetailForm : FormGroup
    file : File 
    files : File[]
    isChecked : boolean = false;

    constructor(
        private router :Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder : FormBuilder,
        private requestService : RequestServices,
        private departmentService : DepartmentsServices,
        private accountService : AccountService
    ){}
    ngOnInit(){
        // this.requestDetailForm = this.requestService.getFormGroupDetail();
        this.departmentService.GetDepartment().then(
            res => {this.departments = res as Department[];},
            err => {console.log(err);}
        )
        this.activatedRoute.paramMap.subscribe(params => {
            var id = params.get('id');
            this.requestService.GetRequestById(id).then(
                res => {
                    this.request = res as Requet    
                },
                err => {console.log(err);}
            )
            this.requestService.GetRequestDetail(id).then(
                res => {
                    this.requestDetail = res as Requetsdetailed
                    this.requestDetailForm = this.formBuilder.group({
                        sentdate: this.requestDetail.sentDate,
                        payday: this.requestDetail.payday,
                        reason: this.requestDetail.reason,
                        status: this.requestDetail.status,
                        reply: this.requestDetail.reply,
                        idRequest: this.requestDetail.idRequest,
                    })
                },
                    
                err => {console.log(err);}
            )
            // this.requestService.GetRequestFile(id).then(
            //     res => {this.requestFile = res as RequestFile[]},
            //     err => {console.log(err);}
            // )
        })
    }

    updateRequest(){
        var requestD : Requetsdetailed = this.requestDetailForm.value as Requetsdetailed;
        var formData = new FormData();
        requestD.idRequest = this.requestDetail.idRequest;
        switch (this.request.status){
            case 5 : {
                alert(`You can't send!`);
                break;
            }
            case 4 : {
                if(this.isChecked){
                    if(this.file != null){
                                for (let index = 0; index < this.files.length; index++) {
                                    this.file = this.files[index];
                                    formData.append('files', this.file);
                                }
                            }
                            requestD.status = 5
                            formData.append('requestDetail_', JSON.stringify(requestD));
                            this.requestService.PutUserRequet(formData).then(
                                res => {
                                    console.log(res);
                                    var resultAPI : ResultAPI = res as ResultAPI;
                                    if(resultAPI.result){
                                        this.router.navigate(['/login/profile']);
                                    }else {
                                        alert(`Update Failed!`);
                                    }
                                },
                                err => {console.log(err);}
                            ); 
                            break;
                        }else {alert(`Request completed, you can't send. Please check!`); break;}
            }
            case 3 : {
                alert(`Sorry for the problem, we can't solve this problem. Thank you!`); break;
            }
            default: {
                if(this.isChecked){
                    alert(`Don't checked, please!`);
                }else {
                    if(this.file != null){
                                for (let index = 0; index < this.files.length; index++) {
                                    this.file = this.files[index];
                                    formData.append('files', this.file);
                                }
                            }
                            formData.append('requestDetail_', JSON.stringify(requestD));
                            this.requestService.PutUserRequet(formData).then(
                                res => {
                                    console.log(res);
                                    var resultAPI : ResultAPI = res as ResultAPI;
                                    if(resultAPI.result){
                                        this.router.navigate(['/login/profile']);
                                    }else {
                                        alert(`Update Failed!`);
                                    }
                                },
                                err => {console.log(err);}
                            ); 
                }
            }
            
        }
       
        
    }

    selectFile(evt : any){
        this.file = evt.target.files[0];
        this.files =evt.target.files;
    }

    onCheckboxChange(evt : any){
        this.isChecked = evt.target.checked;
        console.log(this.isChecked);
    }
}
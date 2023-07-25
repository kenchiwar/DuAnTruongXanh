import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Requet } from "src/app/models/request.model";
import { Requetsdetailed } from "src/app/models/requetsdetailed.model";
import { ResultAPI } from "src/app/models/resultapi";
import { RequestServices } from "src/app/services/request.service";
@Component({
       templateUrl : './indexrequest.component.html'
       
})
export class IndexRequestComponent implements OnInit {
   requestDetails : Requetsdetailed
   requests : Requet[];
   request : Requet[];
   filterRequest : string;

   formRequest : FormGroup
    constructor(
        private router :Router,
        private requestService : RequestServices
    ){}
    ngOnInit(): void {
        // this.requestService.getFormGroup();

        this.requestService.GetRequets().then(
            res => {
                
                this.requests = res as Requet[];
                this.requests = this.requests.filter(request => request.idHandle == null);
            },
            err => {console.log(err);}
        )
    }

    accept(id : any){
        var request : Requet = this.formRequest.value as Requet;
        var formData = new FormData();
        request.id = id;
        formData.append('strRequest', JSON.stringify(request));
        this.requestService.PostRequest(formData).then(
            res => {
                var resultAPI : ResultAPI = res as ResultAPI
                if (resultAPI.result){
                    this.router.navigate(['/admin/request/index']);
                }
            }, err => {console.log(err);}
        );
    }
    
}
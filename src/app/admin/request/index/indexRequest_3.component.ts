import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Requet } from "src/app/models/request.model";
import { ResultAPI } from "src/app/models/resultapi";
import { AccountService } from "src/app/services/account.service";
import { RequestServices } from "src/app/services/request.service";

@Component({
    selector: 'app-indexRequest_3',
    templateUrl: './indexRequest_3.component.html'
})

export class IndexRequest_3Component implements OnInit {
    requests_ : Requet[];
    request_ : Requet;
    idRequest : any;
    filterRequest : string;
    formRequest : FormGroup
 
     constructor(
         private router :Router,
         private requestService : RequestServices,
         private activatedRoute : ActivatedRoute,
         private accountService : AccountService
     ){}
    ngOnInit(): void {
        this.requestService.GetRequets().then(res => {
            this.requests_ = res as Requet[]
            this.requests_ = this.requests_.filter(request => request.idHandle != null && request.status == 4 ||request.status == 5); 
    });
    }


    reprocess(id: any){
        this.accountService.SendApi('put',`https://localhost:7007/api/Requets/reprocess/${id}`).then(
            res => {
            var resultAPI : ResultAPI = res as ResultAPI;
            if(resultAPI.result){
                this.ngOnInit()
            }else {
                alert(`Reprocess Failed!`)
            }}
               ,err => {alert(`This is your request!`)}
        )};
}
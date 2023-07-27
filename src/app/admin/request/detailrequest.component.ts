import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Requet } from "src/app/models/request.model";
import { RequestServices } from "src/app/services/request.service";
@Component({
       templateUrl : './detailrequest.component.html'
       
})
export class DetailRequestComponent implements OnInit {
   request : Requet[];

    constructor(
        private router :Router,
        private activatedRoute : ActivatedRoute,
        private requestService : RequestServices
    ){}
    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            var id = params.get('id');
            console.log(id);
            this.requestService.GetRequestDetail(id).then(
                res => {this.request = res as Requet[]
                console.log(this.request);},
                err => {console.log(err);}
            )
        })
    }
    
}
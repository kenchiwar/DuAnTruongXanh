import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Requet } from "src/app/models/request.model";
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
 
    requestsPagin_: any[];
    pageSize_ = 10; // số lượng mục trên mỗi trang
    currentPage_ = 1; // trang hiện tại
    totalItems_: number; // tổng số mục
     constructor(
         private router :Router,
         private requestService : RequestServices,
         private activatedRoute : ActivatedRoute,
         private accountService : AccountService
     ){}
    ngOnInit(): void {
        this.requestService.GetRequets().then((data: any) => {
            this.requests_ = data
            this.requests_ = this.requests_.filter(request => request.idHandle != null && request.status == 4 ||request.status == 5);
            this.totalItems_ = this.requests_.length
    });
    }


    reprocess(id: any){
        this.accountService.SendApi('put',`https://localhost:7007/api/Requets/reprocess/${id}`).then((mer) => {
            this.ngOnInit()
      });
    }
}
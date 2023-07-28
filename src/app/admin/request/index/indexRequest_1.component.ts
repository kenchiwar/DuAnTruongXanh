import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Requet } from "src/app/models/request.model";
import { AccountService } from "src/app/services/account.service";
import { RequestServices } from "src/app/services/request.service";

@Component({
    selector: 'app-indexRequest_1',
    templateUrl: './indexRequest_1.component.html'
})

export class IndexRequest_1Component implements OnInit {
   requests : Requet[];
   request : Requet;
   idRequest : any;
   filterRequest : string;
   formRequest : FormGroup
    requestsPagin: any[];
    pageSize = 10; // số lượng mục trên mỗi trang
    currentPage = 1; // trang hiện tại
    totalItems: number; // tổng số mục

     constructor(
         private router :Router,
         private requestService : RequestServices,
         private activatedRoute : ActivatedRoute,
         private http: HttpClient,
         private accountService : AccountService
     ){}

    ngOnInit(): void {
        this.requestService.GetRequets().then((data: any) => {
            this.requests = data
            this.requests = this.requests.filter(request => request.idHandle == null)
            this.totalItems = this.requests.length
    })
    }

    async accept(id: any){
         this.accountService.SendApi('put',`https://localhost:7007/api/Requets/${id}`).then((mer) => {
      });
      this.ngOnInit()
    }
}
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Requet } from "src/app/models/request.model";
import { AccountService } from "src/app/services/account.service";
import { RequestServices } from "src/app/services/request.service";
declare var $ : any;
@Component({
    selector: 'app-indexRequest_2',
    templateUrl: './indexRequest_2.component.html'
})

export class IndexRequest_2Component implements OnInit {
    requests_ : Requet[];
    request_ : Requet;
    idRequest : any;
    filterRequest : string;
    formRequest : FormGroup
     constructor(
         private router :Router,
         private requestService : RequestServices,
         private activatedRoute : ActivatedRoute,
         private http: HttpClient,
         private accountService : AccountService
     ){}
    ngOnInit(): void {
        this.requestService.GetRequets().then( res => {
            this.requests_ = res as Requet[]
            this.requests_ = this.requests_.filter(request => request.idHandle != null && request.status != 0 && request.status != 4)
    }, err => {console.log(err)});
    setTimeout(()=>{
        $('#index-request2').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": true,
          "responsive": true,          
          "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
        }).buttons().container().appendTo('#index-request2_wrapper .col-md-6:eq(0)');;
      },1000);
    }
    

    reload(){
        this.ngOnInit()
    }
}
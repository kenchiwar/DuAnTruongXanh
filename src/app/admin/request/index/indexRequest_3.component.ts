import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Requet } from "src/app/models/request.model";
import { ResultAPI } from "src/app/models/resultapi";
import { AccountService } from "src/app/services/account.service";
import { RequestServices } from "src/app/services/request.service";
declare var $ : any;
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
            this.requests_ = this.requests_.filter(request => request.idHandle != null && request.status == 4 || request.status == 5 || request.status == 3);
            if ($.fn.DataTable.isDataTable($('#index-request3'))) {
                $('#index-request3').DataTable().destroy();
              }
            setTimeout(()=>{
                $('#index-request3').DataTable({
                  "paging": true,
                  "lengthChange": false,
                  "searching": true,
                  "ordering": true,
                  "info": true,
                  "autoWidth": true,
                  "responsive": true,          
                  "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
                }).buttons().container().appendTo('#index-request3_wrapper .col-md-6:eq(0)');;
              },1000);
    },err => console.log(err));
    
    
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
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Requet } from "src/app/models/request.model";
import { ResultAPI } from "src/app/models/resultapi";
import { AccountService } from "src/app/services/account.service";
import { RequestServices } from "src/app/services/request.service";
declare var $ : any;
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
   
     constructor(
         private router :Router,
         private requestService : RequestServices,
         private activatedRoute : ActivatedRoute,
         private http: HttpClient,
         private accountService : AccountService
     ){}

    ngOnInit(): void {
        this.requestService.GetRequets().then(res => {
          this.requests = res as Requet[];
            this.requests = this.requests.filter(request => request.idHandle == null)
            if ($.fn.DataTable.isDataTable($('#index-request1'))) {
                $('#index-request1').DataTable().destroy();
              }
            setTimeout(()=>{
                $('#index-request1').DataTable({
                  "paging": true,
                  "lengthChange": false,
                  "searching": true,
                  "ordering": true,
                  "info": true,
                  "autoWidth": true,
                  "responsive": true,          
                  "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
                }).buttons().container().appendTo('#index-request1_wrapper .col-md-6:eq(0)');;
              },2000);
    },err => {console.log(err)})
    
    }

    async accept(id: any){
         this.requestService.PutAccount(id).then(
            res => {
                var resultAPI : ResultAPI = res as ResultAPI;
                if(resultAPI.result){
                    this.router.navigate(['/admin/request/index']);
                    this.ngOnInit();
                    
                }else {
                    alert(`Accept failed!`);
                }
            },err => {
                alert(`This is your request!`);
                console.log(err);
            }
         )
      
    }
}
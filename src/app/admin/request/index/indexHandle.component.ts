import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Requet } from "src/app/models/request.model";
import { AccountService } from "src/app/services/account.service";
import { RequestServices } from "src/app/services/request.service";
declare var $: any;
@Component({
    selector: 'app-HandleIndex',
    templateUrl: './indexHandle.component.html',
})

export class HandleIndexComponent implements OnInit{
    requests : Requet[]
    
    constructor(
        private router :Router,
        private requestService : RequestServices,
        private activatedRoute : ActivatedRoute,
        private http: HttpClient,
        private accountService : AccountService
    ){}
    ngOnInit(): void {
        this.requestService.GetRequets().then(
            res => {
                this.requests = res as Requet[]
                this.requests = this.requests.filter(req => req.idHandleNavigation.id == this.accountService.GetAccountLogin().id)
                if ($.fn.DataTable.isDataTable($('#handleIndex'))) {
                    $('#handleIndex').DataTable().destroy();
                  }
                setTimeout(()=>{
                    $('#handleIndex').DataTable({
                      "paging": true,
                      "lengthChange": false,
                      "searching": true,
                      "ordering": true,
                      "info": true,
                      "autoWidth": true,
                      "responsive": true,          
                      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
                    }).buttons().container().appendTo('#handleIndex_wrapper .col-md-6:eq(0)');;
                  },2000);
            },
            err => {console.log(err);}
            
        )
        
    }
}
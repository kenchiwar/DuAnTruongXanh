import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Requet } from "src/app/models/request.model";
import { RequestFile } from "src/app/models/requestfile.model";
import { Requetsdetailed } from "src/app/models/requetsdetailed.model";
import { RequestServices } from "src/app/services/request.service";
@Component({
    selector: 'app-updateUserRequest',
    templateUrl : './updaterequest.component.html'
       
})
export class UpdateUserRequestComponent implements OnInit {
   request : Requet
   requestDetail : Requetsdetailed
   requestFile : RequestFile
    constructor(
        private router :Router,
        private activateRoute: ActivatedRoute,
        private requestService : RequestServices,
    ){}
    ngOnInit(): void {
        
    }
    
}
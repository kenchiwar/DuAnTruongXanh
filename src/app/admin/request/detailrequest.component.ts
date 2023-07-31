import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Requet } from "src/app/models/request.model";
import { RequestServices } from "src/app/services/request.service";
@Component({
       templateUrl : './detailrequest.component.html'
       
})
export class DetailRequestComponent implements OnInit {
  
    ngOnInit(): void {
    }
    
}
import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
@Component({
       templateUrl : './detailroleclaim.component.html'
       
})
export class DetailRoleClaimComponent implements OnInit {
   
    constructor(
        private router :Router,
        
    ){}
    ngOnInit(): void {
        
    }
    
}
import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
@Component({
       templateUrl : './createroleclaim.component.html'
       
})
export class CreateRoleClaimComponent implements OnInit {
   
    constructor(
        private router :Router,
        
    ){}
    ngOnInit(): void {
        
    }
    
}
import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
@Component({
       templateUrl : './updaterole.component.html'
       
})
export class UpdateRoleComponent implements OnInit {
   
    constructor(
        private router :Router,
        
    ){}
    ngOnInit(): void {
        
    }
    
}
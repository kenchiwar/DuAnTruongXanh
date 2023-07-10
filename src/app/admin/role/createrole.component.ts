import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
@Component({
       templateUrl : './createrole.component.html'
       
})
export class CreateRoleComponent implements OnInit {
   
    constructor(
        private router :Router,
        
    ){}
    ngOnInit(): void {
        
    }
    
}
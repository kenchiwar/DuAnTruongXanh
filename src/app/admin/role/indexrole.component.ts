import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
@Component({
       templateUrl : './indexrole.component.html'
       
})
export class IndexRoleComponent implements OnInit {
   
    constructor(
        private router :Router,
        
    ){}
    ngOnInit(): void {
        
    }
    
}
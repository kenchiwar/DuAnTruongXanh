import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
@Component({
        selector : 'layout-content',
       templateUrl : './create.component.html'
})
export class CreateRequestHomeComponent implements OnInit {
   
    constructor(
        private router :Router,
    ){}
    ngOnInit(): void {
       
    }
    
}
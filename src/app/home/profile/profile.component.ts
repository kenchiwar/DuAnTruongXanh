import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
@Component({
        selector : 'layout-content',
       templateUrl : './profile.component.html'
})
export class ProfileHomeComponent implements OnInit {
   
    constructor(
        private router :Router,
    ){}
    ngOnInit(): void {
       
    }
    
}
import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
@Component({
       
       templateUrl : './404.component.html'
})
export class ErrorComponent implements OnInit {
   
    constructor(
        private router :Router,
    ){}
    ngOnInit(): void {
       
    }
    
}
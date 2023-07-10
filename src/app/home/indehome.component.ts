import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
@Component({
       
       templateUrl : './indexhome.component.html'
})
export class IndexHomeComponent implements OnInit {
   
    constructor(
        private router :Router,
    ){}
    ngOnInit(): void {
       
    }
    
}
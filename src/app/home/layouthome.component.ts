import { CssSelector } from "@angular/compiler";
import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
@Component({
      
       templateUrl : './layouthome.component.html',
       styleUrls: ["../style.component.css"],
})
export class LayoutHomeComponent implements OnInit {
   
    constructor(
        private router :Router,
    ){}
    ngOnInit(): void {
       
    }
    
}
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
        this.loadScript('assets/filehome/js/main.js');
    }
    loadScript(url: string) {
        const script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
      }
}
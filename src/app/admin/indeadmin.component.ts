import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
@Component({
       templateUrl : './indexadmin.component.html',
       styleUrls: ["./style.component.css"],

})
export class IndexAdminComponent implements OnInit {

    constructor(
        private router :Router,

    ){}
    ngOnInit(): void {
      // setInterval(function() {
      //   const expiration = localStorage.getItem('username_expiration');
      //   if (expiration && Date.now() > parseInt(expiration)) {
      //     localStorage.removeItem('account');
      //     localStorage.removeItem('username_expiration');
      //   }
      // }, 10000);

    }
    loadScript(url: string) {
        const script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
      }

}

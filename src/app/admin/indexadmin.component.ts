
import { AfterViewInit, Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../services/account.service";

declare let Chart: any;
declare let $: any;
@Component({
       templateUrl : './indexadmin.component.html',
       styleUrls: ["./style.component.css"],

})
export class IndexAdminComponent implements OnInit,AfterViewInit {
    username : string;
    photo : string;
    constructor(
        private router :Router,
        private accountService : AccountService
    ){}
  ngAfterViewInit(): void {
  


    
  }
    ngOnInit(): void {

      // setInterval(function() {
      //   const expiration = localStorage.getItem('username_expiration');
      //   if (expiration && Date.now() > parseInt(expiration)) {
      //     localStorage.removeItem('account');
      //     localStorage.removeItem('username_expiration');
      //   }
      // }, 10000);
      this.username = this.accountService.GetAccountLogin().username;
      this.photo = this.accountService.GetAccountLogin().citizenidentification;
    }
    loadScript(url: string) {
        const script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
      }

}

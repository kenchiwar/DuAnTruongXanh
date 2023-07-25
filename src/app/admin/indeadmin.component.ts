import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../services/account.service";
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
    
    // const scriptUrls = [
    //   'assets/fileadmin/plugins/chart.js/Chart.min.js',
    //   'assets/fileadmin/dist/js/chart.js',
     
    // ];

    // scriptUrls.forEach(url => {
    //   const script = document.createElement('script');
    //   script.type = 'text/javascript';
    //   script.src = url;
    //   script.async=true;
    //   // script.defer = true;  //trường hợp đặc biệt sau file
    //   //../node_modules/Maxim/assets/
    //  // this.elementRef.nativeElement.appendChild(script);
    //  document.body.appendChild(script);
    // });

  }
    ngOnInit(): void {
      this.loadScript('assets/fileadmin/dist/js/demo.js');
      this.loadScript('assets/fileadmin/dist/js/main.js');
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

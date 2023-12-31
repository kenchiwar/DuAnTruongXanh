import { CssSelector } from "@angular/compiler";
import { AfterViewInit, Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../services/account.service";
import { Account } from "../models/account.model";
@Component({

       templateUrl : './layouthome.component.html',
       styleUrls: ["../style.component.css"],
})

export class LayoutHomeComponent implements OnInit,AfterViewInit {

    idAccount : number;
    roleAccount : number;
    constructor(
        private router :Router,
        private accountService :AccountService,
    ){}
    accountLogin?:Account;
  
    ngOnInit(): void {
        this.idAccount = 0;
        this.roleAccount = 4;
        try{
          this.accountLogin = this.accountService.GetAccountLogin();
          console.log(this.accountLogin)
          this.idAccount = this.accountLogin.id;
          this.roleAccount = this.accountLogin.idRole;
          console.log(this.roleAccount);
        }catch(error){
          
        }
        
    }
    ngAfterViewInit(): void {
        const scriptUrls = [
        // 'assets/filehome/vendor/aos/aos.js',
        // 'assets/filehome/vendor/bootstrap/js/bootstrap.bundle.min.js',
        'assets/filehome/vendor/glightbox/js/glightbox.min.js',
        'assets/filehome/vendor/isotope-layout/isotope.pkgd.min.js',
        // 'assets/filehome/vendor/swiper/swiper-bundle.min.js',
        // 'assets/filehome/vendor/php-email-form/validate.js',
        'assets/filehome/js/main.js',

    ];
    scriptUrls.forEach(url => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;//urrl
        script.async=true;
        document.body.appendChild(script);

    });
  }
  changeAdmin(){
    setTimeout(() => {
      location.reload();
    },300);
    this.router.navigate(['/admin']);
  }
    loadScript(url: string) {
        const script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
      }
      logout() {
        this.accountService.Logout();
      }
      
}

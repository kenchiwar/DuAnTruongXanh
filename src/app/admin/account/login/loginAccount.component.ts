import { HttpClient } from "@angular/common/http";
import { Component, OnInit, } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Account } from "src/app/models/account.model";
import { ResultAPI } from "src/app/models/resultapi";
import { AccountService } from "src/app/services/account.service";
import { ValidatorData } from "src/app/services/validatorData.service";
@Component({
       templateUrl : './loginAccount.component.html',
        selector:'<account-login></account-login>'

})
export class loginAccount implements OnInit {

    constructor(
      private   accountService:AccountService,
      public  validationService: ValidatorData,
      private router:Router
    ){}

    isLoading:boolean ;
    isEmailConfirm :boolean  ;
    formGroupLogin: FormGroup;
    //Mấy cái này quan trọng để yên là đc
    isPageLogin:boolean;


    //Page forfet pass word
    isPageForgetPassword:boolean;
    usernameForget:string;
    code:string;
      //Page nhập input
      isInputSecurityPage:boolean;
      //page nhập confirm Pass word
      isComfirmPassPage :boolean;

      //CHo viewChild bên ngoài
      isViewChild:boolean;
    ngOnInit(): void {
      this.isLoading=false;
      //Page login
      this.isPageLogin=true;
      this.formGroupLogin = this.accountService.getFormGroupLogin(['emailaddress','password']);
      //Page forgetPass word
      this.isPageForgetPassword=false;
      this.isEmailConfirm =false ;
      this.usernameForget='';
      this.code='';
      //Security nhập input 6 số
      this.isInputSecurityPage=false;
      //Page confirm Pass
      this.isComfirmPassPage=false;
      //ViewCHild
      this.isViewChild=false;

      //Cái này để cho ông nghị nó text đi
      this.isPageForgetPassword=true;


      this.isPageLogin=true;
      this.isComfirmPassPage=true;
      this.isInputSecurityPage=true;



      }

    forgetPasswordPage(){

      this.isPageForgetPassword=true;

      //
      this.isPageLogin=false;
      this.isComfirmPassPage=false;
      this.isInputSecurityPage=false;

      //
      this.formGroupLogin = this.accountService.getFormGroupLogin(['emailaddress']);

      this.isEmailConfirm =false ;
      this.usernameForget='';
      this.code='';
    }
    loginPage(){
      this.isPageForgetPassword=false;

      //
      this.isPageLogin=true;
      this.isComfirmPassPage=false;
      this.isInputSecurityPage=false;

      //

      //

      this.formGroupLogin = this.accountService.getFormGroupLogin(['password','emailaddress']);





    }
    inputSecurityPage(){
      this.isPageForgetPassword=false;

      //
      this.isPageLogin=false;
      this.isComfirmPassPage=false;
      this.isInputSecurityPage=true;

      //

      this.formGroupLogin = this.accountService.getFormGroupLogin();
    }
    comfirmPasswordPage(){
      this.isPageForgetPassword=false;

      //
      this.isPageLogin=false;
      this.isComfirmPassPage=true;
      this.isInputSecurityPage=false;



      //
      this.formGroupLogin=this.accountService.getFormGroupLogin(['password','confirmPassword']);
    }
    reSend(){
      this.accountService.getCodeSecurity(this.usernameForget).then(code=>{
        var data = code as {code:string};
        this.code=data.code;
        alert(this.code);
        this.inputSecurityPage();

    }).catch(error=>{
      alert(
        "Can not send security code"
      )
    });

    }
    submit(){



        for (const field in this.formGroupLogin.controls) {
          const control = this.formGroupLogin.get(field);
          if(!control.disabled){
            control.markAsDirty();
            control.markAsTouched();
            if(!control.valid) {
              alert("form have something wrong");
              return ;
            }

          }

        }



      //
      this.isLoading=true;
      var username = this.formGroupLogin.get('emailaddress').getRawValue() as string ;
      var password = this.formGroupLogin.get('password').getRawValue() as string ;

      this.accountService.Login(username, password).then(success => {
        var account  = success as Account;

        account.password = password;
        localStorage.setItem('account', JSON.stringify(account));

        localStorage.setItem('username_expiration',Date.now()+12 * 60 * 60 * 1000 +'');

        console.log(this.accountService.GetAccountLogin());
       alert('success');
        if(account.idRole<=2) {
          this.validationService.getRouterChange("/admin","");
        }else{
          this.validationService.getRouterChange("/","");
        }
      }).catch(error => {
        console.log(error);
        alert('Username or PassWord is Incorrect ');
      }).finally(()=>{
        setTimeout(()=>{
          this.isLoading=false;
        },2000);
      });;
  }
    submitForget(){
      if(!this.validationService.checkFormGroupSubmit(this.formGroupLogin)) {
        alert("form have Some thing wrong");

        return;

      }
      this.isLoading=true;

      var username = this.formGroupLogin.get('emailaddress').getRawValue() as string ;
      this.accountService.CheckEmailExists(username).then(resultEmail=>{

        if(!(this.isEmailConfirm=!resultEmail as boolean) ){
          this.usernameForget=username;
          this.reSend();
          //sao khi submit xong rồi thì chuyển qua trang nhập code ;

        }else{
          alert("username don't exist");
        }



      }).catch(error=>{
          alert("some thing wrong ");
      }).finally(()=>{

          setTimeout(()=>{
            this.isLoading=false;
          },2000);

        });
    }
    submitInputSecurityCode(){
      if(!this.validationService.checkFormGroupSubmit(this.formGroupLogin)) {
        alert("form have Some thing wrong");
        return;

      }
      this.isLoading=true;
      var data = '';
     for( const met in  this.formGroupLogin.value){
      const control = this.formGroupLogin.get(met);
        data+=control.value;
     }
      if(data==this.code){
          this.comfirmPasswordPage();
      }else{
        alert("Code security incorrect");
      }
      this.isLoading=false;

    }
    submitConfirmPass(){
      if(!this.validationService.checkFormGroupSubmit(this.formGroupLogin)) {
        alert("form have Some thing wrong");
        return;

      }
      this.isLoading=true;
      var password = this.formGroupLogin.get('password').value;
      this.accountService.ChangPass(this.usernameForget,password).then(success => {
        var result = success as ResultAPI;
        if(result.result){
          alert("ChangePass suucess fully");
          this.loginPage();
          }else{
            alert("ChangePass error");
          }

      }).catch(error =>{
          alert("some thing wrong!");
      }).finally(()=>{
        setTimeout(()=>{
          this.isLoading=false;
        },1000);
      })

    }
    viewChildPage(username:string){
      this.inputSecurityPage();
      this.isViewChild=true;
      this.usernameForget = username;
      this.reSend();

    }



}

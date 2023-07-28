import { Injector, inject, ɵsetCurrentInjector, ɵɵinject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account.model';

export const authGuard: CanActivateFn = (route, state: RouterStateSnapshot) => {
  let service = ɵɵinject(AccountService);
  let router = inject(Router);


  //  try {
  //   var account= service.GetAccountLogin() as Account;
  //   console.log(account);
  //   if(account.idRole<=2){
  //     return true;
  //   }
  //  } catch (error) {

  //  }
  //  setTimeout(()=>{
  //   router.navigateByUrl('/error', { skipLocationChange: true });
  //  },300);
  //  return false ;
   return true ;


};

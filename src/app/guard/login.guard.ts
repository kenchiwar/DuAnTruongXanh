import { inject, ɵɵinject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account.model';

export const loginGuard: CanActivateFn = (route, state) => {
  let service = ɵɵinject(AccountService);
  let router = inject(Router);
  //  try {
  //   var account= service.GetAccountLogin() as Account;
  //   console.log(account);
  //   if(account.id!=null && account.id>0){
  //     return true;
  //   }
  //  } catch (error) {

  //  }
  //  setTimeout(()=>{
  //   router.navigateByUrl('/error', { skipLocationChange: true });
  //  },300);
  //  return false ;
  return true;
};

import { Injectable } from "@angular/core";
import { UrlService } from "./url.services";





@Injectable()
export class UrlApi{
  readonly urlService = new UrlService();
   readonly  baseUrl  : string = this.urlService.baseUrl ;
   readonly  baseChuyenBayUrl:string = this.baseUrl+"api/Accounts";
   readonly  baseAccountsUrl:string = this.baseUrl+"api/Accounts";
   readonly  baseDepartments:string = this.baseUrl+"api/Departments";
   readonly  baseRequetsUrl:string = this.baseUrl+"api/Requets";
   readonly  baseRoleClaimsUrl:string = this.baseUrl+"api/RoleClaims";
   readonly  baseRolesUrl:string = this.baseUrl+"api/Roles";
   readonly  baseVeUrl:string = this.baseUrl+"/api/Ves";
   readonly baseAccountLoginUrl:string = this.baseUrl+"api/AccountLogin";

}
//Nên tạo cái này url.services.ts kế bên file baseUrl để git ing nó đi code thì ở dưỡi
// export class UrlService {
//   readonly baseUrl: string =  "http://localhost:5138"  ;  //localhost bên tím
// }

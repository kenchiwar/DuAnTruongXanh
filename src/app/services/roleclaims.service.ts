import { HttpClient } from "@angular/common/http";
import { UrlApi } from "./baseurl.services";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";
import { catchError, lastValueFrom, of} from "rxjs";




@Injectable()
export class RoleClaimsServices {
    [x: string]: any;

  constructor(private http:HttpClient,private url:UrlApi,private formBuilder:FormBuilder) {
   // private convert:ConvertDate
  }
  async GetRoleClaims(){

    return await lastValueFrom(this.http.get(this.url.baseRoleClaimsUrl));
  }
  getFormGroup():FormGroup{

    return this.formBuilder.group({
      id: 0,
      name: '',
      describe: '',
      claim: 0,
    });
}

// requetIdComplainNavigations: {bbbb:'',Bbb:0,},
// requetIdHandleNavigations: {bbbb:'',Bbb:0,},  
// idRoleClaims: {bbbb:'',Bbb:0,},  
getFormGroupData(data :any):FormGroup{
    return this.formBuilder.group({
      id: data.id,
      name: data.name,
      describe: data.describe,
      claim: data.claim,
    });
}

async GetRoleClaimById(id:string){

  return await lastValueFrom(this.http.get(this.url.baseRoleClaimsUrl+"/"+id));
}

async PostRoleClaim(formData: FormData){
  return await lastValueFrom(this.http.post(this.url.baseRoleClaimsUrl+"/created",formData));
}
async DeleteRoleClaim(id:string){
  return await lastValueFrom(this.http.delete(this.url.baseRoleClaimsUrl+"/"+id));
}
async PutRoleClaim(formData: FormData){
  return await lastValueFrom(this.http.put(this.url.baseRoleClaimsUrl+"/updated",formData));
  }
}   
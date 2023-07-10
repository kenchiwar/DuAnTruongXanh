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

    return await lastValueFrom(this.http.get(this.url.baseUrl+"/api/roleclaims/getroleclaims"));
  }
  getFormGroup():FormGroup{

    return this.formBuilder.group({
      id: 0,
      name: '',
      describe: '',
      claim: 0,
      idAccounts: this.formBuilder.group({bbbb:'',Bbb:0}),   
  
      
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
      idAccounts: this.formBuilder.group({bbbb:'',Bbb:0}),   
  
  
    });
}

async GetRoleClaim(id:string){

  return await lastValueFrom(this.http.get(this.url.baseUrl+"/api/roleclaims/getroleclaim/"+id));
}

async PostRoleClaim(data:any){
  return await lastValueFrom(this.http.post(this.url.baseChuyenBayUrl+"/api/roleclaims/postroleclaim/",data));
}
async DeleteRoleClaim(id:string){
  return await lastValueFrom(this.http.delete(this.url.baseChuyenBayUrl+"/api/roleclaims/deleteroleclaim/"+id));
}
async PutRoleClaim(data:any,id:string){
  return await lastValueFrom(this.http.put(this.url.baseChuyenBayUrl+"/api/roleclaims/putroleclaim/"+id,data));
  }
}   
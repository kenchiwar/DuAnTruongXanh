import { HttpClient } from "@angular/common/http";
import { UrlApi } from "./baseurl.services";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";
import { catchError, lastValueFrom, of} from "rxjs";




@Injectable()
export class RoleServices {
    [x: string]: any;

  constructor(private http:HttpClient,private url:UrlApi,private formBuilder:FormBuilder) {
   // private convert:ConvertDate
  }
  async GetRequets(){

    return await lastValueFrom(this.http.get(this.url.baseUrl+"/api/role/getrequets"));
  }
  getFormGroup():FormGroup{

    return this.formBuilder.group({
      id: 0,
      name: '',
      describe: '',
      accounts: this.formBuilder.group({bbbb:'',Bbb:0}),   
  
      
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
      accounts: this.formBuilder.group({bbbb:'',Bbb:0}),   
  
    });
}

async GetRole(id:string){

  return await lastValueFrom(this.http.get(this.url.baseUrl+"/api/role/getrole/"+id));
}

async PostRole(data:any){
  return await lastValueFrom(this.http.post(this.url.baseChuyenBayUrl+"/api/role/postrole/",data));
}
async DeleteRole(id:string){
  return await lastValueFrom(this.http.delete(this.url.baseChuyenBayUrl+"/api/role/deleterole/"+id));
}
async PutRole(data:any,id:string){
  return await lastValueFrom(this.http.put(this.url.baseChuyenBayUrl+"/api/role/putrole/"+id,data));
  }
}   
import { HttpClient } from "@angular/common/http";
import { UrlApi } from "./baseurl.services";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";
import { catchError, lastValueFrom, of} from "rxjs";




@Injectable()
export class DepartmentsServices {
    [x: string]: any;

  constructor(private http:HttpClient,private url:UrlApi,private formBuilder:FormBuilder) {
   // private convert:ConvertDate
  }
  async GetDepartments(){

    return await lastValueFrom(this.http.get(this.url.baseUrl+"/api/departments/getdepartments"));
  }
  getFormGroup():FormGroup{

    return this.formBuilder.group({
      id:0,
      tenDepartment:'',
      describe : '',
      address :'',
      status : false,
      accounts : {bbbb:'',Bbb:0,},
      requets : {bbbb:'',Bbb:0,},
    });
}

// requetIdComplainNavigations: {bbbb:'',Bbb:0,},
// requetIdHandleNavigations: {bbbb:'',Bbb:0,},  
// idRoleClaims: {bbbb:'',Bbb:0,},  
getFormGroupData(data :any):FormGroup{
    return this.formBuilder.group({
      id:data.id,
      tenDepartment:data.tenDepartment,
      describe : data.describe,
      address :data.address,
      status : data.status,
    });
}

    async GetDepartment(id:string){

    return await lastValueFrom(this.http.get(this.url.baseUrl+"/api/departments/getdepartment/"+id));
  }

  async PostDepartment(formData:FormData){
    return await lastValueFrom(this.http.post(this.url.baseDepartments+ "/created", formData));
  }

  
  async DeleteDepartment(id:string){
    return await lastValueFrom(this.http.delete(this.url.baseChuyenBayUrl+"/api/departments/deletedepartment/"+id));
  }
  async PutDepartment(data:any,id:string){
    return await lastValueFrom(this.http.put(this.url.baseChuyenBayUrl+"/api/departments/putdepartment/"+id,data));
  }

  //created department
  
}   
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
  getFormGroup(){

    return this.formBuilder.group({
      id:0,
      tenDepartment:'',
      describe : '',
      address :'',
      status : false,
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

async GetDepartment(){
  return await lastValueFrom(this.http.get(this.url.baseDepartments+ "/getDepartment"));
}

    async GetDepartmentById(id:string){
    return await lastValueFrom(this.http.get(this.url.baseDepartments+ "/getDepartmentById/" +id));
  }

  async PostDepartment(formData:FormData){
    return await lastValueFrom(this.http.post(this.url.baseDepartments+ "/created", formData));
  }

  
  async DeleteDepartment(id:string){
    return await lastValueFrom(this.http.delete(this.url.baseDepartments+"/"+id));
  }
  async PutDepartment(formData: FormData){
    return await lastValueFrom(this.http.put(this.url.baseDepartments+ "/updated", formData));
  }

}   
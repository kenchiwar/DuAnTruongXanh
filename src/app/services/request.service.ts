import { HttpClient } from "@angular/common/http";
import { UrlApi } from "./baseurl.services";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";
import { catchError, lastValueFrom, of} from "rxjs";




@Injectable()
export class RequestServices {
    [x: string]: any;

  constructor(private http:HttpClient,private url:UrlApi,private formBuilder:FormBuilder) {
   // private convert:ConvertDate
  }
  async GetRequets(){

    return await lastValueFrom(this.http.get(this.url.baseUrl+"/api/request/getrequets"));
  }
  getFormGroup():FormGroup{

    return this.formBuilder.group({
      id: 0,
      idComplain: 0,
      idDepartment: 0,
      idHandle: 0,
      title: '',
      status: 0,
      level: 0,
      sentDate: '',
      endDate: '',
      priority: 0,
      idComplainNavigation: this.formBuilder.group({
        id : 0,
        username :'',
        password :'',
        idRole :0,
        idDepartment:0 ,
        fullname:'',
        emailaddress:'',
        phonenumber : '',
        address:'',
        citizenidentification:'',
        dateofbirth:'',
        sex :false,
        status : false,
        role:'',
        class:'',
        schoolyear:'',
        degree:'',
        academicrank:'',
    }),
      idDepartmentNavigation: this.formBuilder.group({
        id:0,
        tenDepartment:'',
        describe : '',
        address :'',
        status : false,
    }),
      idHandleNavigation:this.formBuilder.group({
        id : 0,
        username :'',
        password :'',
        idRole :0,
        idDepartment:0 ,
        fullname:'',
        emailaddress:'',
        phonenumber : '',
        address:'',
        citizenidentification:'',
        dateofbirth:'',
        sex :false,
        status : false,
        role:'',
        class:'',
        schoolyear:'',
        degree:'',
        academicrank:'',
    }),
      requestFiles: this.formBuilder.group({bbbb:'',Bbb:0}),   
      requetsdetaileds: this.formBuilder.group({bbbb:'',Bbb:0}),   
    });
}

// requetIdComplainNavigations: {bbbb:'',Bbb:0,},
// requetIdHandleNavigations: {bbbb:'',Bbb:0,},  
// idRoleClaims: {bbbb:'',Bbb:0,},  
getFormGroupData(data :any):FormGroup{
    return this.formBuilder.group({
      id: data.id,
      idComplain: data.idComplain,
      idDepartment: data.idDepartment,
      idHandle: data.idHandle,
      title: data.title,
      status: data.status,
      level: data.level,
      sentDate: data.sentDate,
      endDate: data.endDate,
      priority: data.priority,
      idComplainNavigation: this.formBuilder.group({
        id : 0,
        username :'',
        password :'',
        idRole :0,
        idDepartment:0 ,
        fullname:'',
        emailaddress:'',
        phonenumber : '',
        address:'',
        citizenidentification:'',
        dateofbirth:'',
        sex :false,
        status : false,
        role:'',
        class:'',
        schoolyear:'',
        degree:'',
        academicrank:'',
    }),
      idDepartmentNavigation: this.formBuilder.group({
        id:0,
        tenDepartment:'',
        describe : '',
        address :'',
        status : false,
    }),
      idHandleNavigation:this.formBuilder.group({
        id : 0,
        username :'',
        password :'',
        idRole :0,
        idDepartment:0 ,
        fullname:'',
        emailaddress:'',
        phonenumber : '',
        address:'',
        citizenidentification:'',
        dateofbirth:'',
        sex :false,
        status : false,
        role:'',
        class:'',
        schoolyear:'',
        degree:'',
        academicrank:'',
    }),
    });
}

    async GetRequest(id:string){

    return await lastValueFrom(this.http.get(this.url.baseUrl+"/api/request/getrequet/"+id));
  }

  async PostRequet(data:any){
    return await lastValueFrom(this.http.post(this.url.baseChuyenBayUrl+"/api/request/postrequet/",data));
  }
  async DeleteRequet(id:string){
    return await lastValueFrom(this.http.delete(this.url.baseChuyenBayUrl+"/api/request/deleterequet/"+id));
  }
  async PutRequet(data:any,id:string){
    return await lastValueFrom(this.http.put(this.url.baseChuyenBayUrl+"/api/request/putrequet/"+id,data));
  }
}   
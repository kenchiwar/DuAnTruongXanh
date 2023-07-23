import { HttpClient } from "@angular/common/http";
import { UrlApi } from "./baseurl.services";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";
import { catchError, lastValueFrom, of} from "rxjs";
import { AccountService } from "./account.service";
import { Account } from "../models/account.model";




@Injectable()
export class RequestServices {
    [x: string]: any;

  constructor(private http:HttpClient,private url:UrlApi,private formBuilder:FormBuilder) {
   // private convert:ConvertDate
  }
  async GetRequets(){

    return await lastValueFrom(this.http.get(this.url.baseRequetsUrl + "/getRequest"));
  }
  getFormGroup(){
    var form = this.formBuilder.group({
      id: 0,
      idComplain: '1',
      idDepartment: '2',
      idHandle: '',
      title: '',
      status: '0',
      level: '0',
      sentDate: '',
      endDate: '',
      priority: '1',
  });
    
    return form;
    // return this.formBuilder.group({
    //   id: 0,
    //   idComplain: 0,
    //   idDepartment: 0,
    //   idHandle: 0,
    //   title: '',
    //   status: 0,
    //   level: 0,
    //   sentDate: '',
    //   endDate: '',
    //   priority: 0,
    //   idComplainNavigation: this.formBuilder.group({
    //     id : 0,
    //     username :'',
    //     password :'',
    //     idRole :0,
    //     idDepartment:0 ,
    //     fullname:'',
    //     emailaddress:'',
    //     phonenumber : '',
    //     address:'',
    //     citizenidentification:'',
    //     dateofbirth:'',
    //     sex :false,
    //     status : false,
    //     role:'',
    //     class:'',
    //     schoolyear:'',
    //     degree:'',
    //     academicrank:'',
    // }),
    //   idDepartmentNavigation: this.formBuilder.group({
    //     id:0,
    //     tenDepartment:'',
    //     describe : '',
    //     address :'',
    //     status : false,
    // }),
    //   idHandleNavigation:this.formBuilder.group({
    //     id : 0,
    //     username :'',
    //     password :'',
    //     idRole :0,
    //     idDepartment:0 ,
    //     fullname:'',
    //     emailaddress:'',
    //     phonenumber : '',
    //     address:'',
    //     citizenidentification:'',
    //     dateofbirth:'',
    //     sex :false,
    //     status : false,
    //     role:'',
    //     class:'',
    //     schoolyear:'',
    //     degree:'',
    //     academicrank:'',
    // }),
    //   requestFiles: this.formBuilder.group({bbbb:'',Bbb:0}),   
    //   requetsdetaileds: this.formBuilder.group({bbbb:'',Bbb:0}),   
    // });
}

getFormGroupFile(){

  var requestFileForm =  this.formBuilder.group({
      id: 0,
      name: '',
      idRequest: '1',
  });
  return requestFileForm;
}


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

  async PostRequest(formData: FormData){
    return await lastValueFrom(this.http.post(this.url.baseRequetsUrl+"/created", formData));
  }
  async PostRequestFile(formData: FormData){
    return await lastValueFrom(this.http.post(this.url.baseRequetsUrl+"/requestFile", formData));
  }
  async DeleteRequet(id:string){
    return await lastValueFrom(this.http.delete(this.url.baseChuyenBayUrl+"/api/request/deleterequet/"+id));
  }
  async PutRequet(data:any,id:string){
    return await lastValueFrom(this.http.put(this.url.baseChuyenBayUrl+"/api/request/putrequet/"+id,data));
  }
}   
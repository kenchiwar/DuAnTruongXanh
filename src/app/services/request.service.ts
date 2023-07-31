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

  constructor(
    private http:HttpClient,
    private url:UrlApi,
    private formBuilder:FormBuilder,
    private accountService : AccountService
    ) {
   // private convert:ConvertDate
  }

  getFormGroup(){
    var form = this.formBuilder.group({
      id: 0,
      idComplain: '',
      idDepartment: '2',
      idHandle: '',
      title: '',
      status: '0',
      level: '0',
      sentDate: '',
      endDate: '',
      priority: '1',
      reason: '',
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

getFormGroupDetail(){

  var requestDetailForm =  this.formBuilder.group({
    id: 0,
    sentdate: '',
    payday: '',
    reason: '',
    status: '',
    reply: '',
    idRequest: '1',
  });
  return requestDetailForm;
}

getFormGroupData(data :any):FormGroup{
    return this.formBuilder.group({
      id: data.id,
      idComplain: data.idComplain,
      idDepartment: data.idDepartment,
      idHandle: this.accountService.GetAccountLogin().id,
      title: data.title,
      status: data.status,
      level: data.level,
      sentDate: data.sentDate,
      endDate: data.endDate,
      priority: data.priority,
      reason : data.reason,
    });
}

getFormGroupDetailData(data :any):FormGroup{
  return this.formBuilder.group({
    id: data.id,
    sentdate: data.sentDate,
    payday: data.payday,
    reason: data.reason,
    status: data.status,
    reply: data.reply,
    idRequest: data.idRequest,
  })}

async GetRequets(){

  return await lastValueFrom(this.http.get(this.url.baseRequetsUrl + "/getRequest"));
}

    async GetRequestById(id:string){

    return await lastValueFrom(this.http.get(this.url.baseRequetsUrl+"/getRequestById/"+id));
  }

  async GetRequestDetail(id:string){

    return await lastValueFrom(this.http.get(this.url.baseRequetsUrl+"/requestDetail/"+id));
  }

  async GetRequestFile(id:string){

    return await lastValueFrom(this.http.get(this.url.baseRequetsUrl+"/requestFile/"+id));
  }

  async GetRequestDetailFile(id:string){

    return await lastValueFrom(this.http.get(this.url.baseRequetsUrl+"/getRequestDetailFile/"+id));
  }

  async PostRequest(formData: FormData){
    console.log(formData); 
    return await lastValueFrom(this.http.post(this.url.baseRequetsUrl+"/createRequestWithFile", formData));
  }
  async PostRequestFile(formData: FormData){
    return await lastValueFrom(this.http.post(this.url.baseRequetsUrl+"/requestFile", formData));
  }
  async DeleteRequet(id:string){
    return await lastValueFrom(this.http.delete(this.url.baseChuyenBayUrl+"/api/request/deleterequet/"+id));
  }

  async PutRequet(formData: FormData){
    return await lastValueFrom(this.http.put(this.url.baseRequetsUrl+"/updateDetail",formData));
  }

  async PutRequetAccept(id: string){
    return await lastValueFrom(this.http.put(this.url.baseRequetsUrl+"/",id));
  }
  
  async PutUserRequet(formData: FormData){
    return await lastValueFrom(this.http.post(this.url.baseRequetsUrl+"/updateUserRequest",formData));
  }

  async PostAccount (formData : FormData){
    return await this.accountService.SendApi('post',this.url.baseRequetsUrl+"/createRequestWithFile",formData);
  }

  async PutAccount (id : string){
    return await this.accountService.SendApi('put',this.url.baseRequetsUrl+"/"+id);
  }
}   
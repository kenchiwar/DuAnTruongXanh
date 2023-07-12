import { HttpClient } from "@angular/common/http";
import { UrlApi } from "./baseurl.services";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import {  lastValueFrom} from "rxjs";
import { RegexApi } from "./regex.service";




@Injectable()
export class AccountService {
    [x: string]: any;

  constructor(private http:HttpClient,private url:UrlApi,private formBuilder:FormBuilder,private regex:RegexApi) {
   // private convert:ConvertDate
  }
  async GetAccounts(){

    return await lastValueFrom(this.http.get(this.url.baseUrl+"/api/account/getall"));
  }
  getFormGroup():FormGroup{

    // return this.formBuilder.group({
    //   id : 0,
    //   username :'',
    //   password :'',
    //   idRole :0,
    //   idDepartment:0 ,
    //   fullname:'',
    //   emailaddress:'',
    //   phonenumber : '',
    //   address:'',
    //   citizenidentification:'',
    //   dateofbirth:'',
    //   sex :false,
    //   status : false,
    //   role:'',
    //   class:'',
    //   schoolyear:'',
    //   degree:'',
    //   academicrank:'',
    //   idDepartmentNavigation : this.formBuilder.group({
    //     id:0,
    //     tenDepartment:'',
    //     describe : '',
    //     address :'',
    //     status : false,
    // }),
    //   idRoleNavigation:this.formBuilder.group({
    //     id: 0,
    //     name: '',
    //     describe: '',
    //   }),
    //   requetIdComplainNavigations: this.formBuilder.group({bbbb:'',Bbb:0}),
    //     requetIdHandleNavigations: this.formBuilder.group({bbbb:'',Bbb:0}),
    //     idRoleClaims: this.formBuilder.group({bbbb:'',Bbb:0}),
    // });
    var a = this.formBuilder.group({
      Id:0 ,
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      idRole: ['3', Validators.required],
      idDepartment: ['1', Validators.required],
      fullname: ['', Validators.required],
      emailaddress: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern(this.regex.PhoneNumber)]],
      address: ['', Validators.required],
      citizenidentification: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      sex: [false, Validators.required],
      status: [false, Validators.required],
      role: ['', Validators.required],
      class: ['', Validators.required],
      schoolyear: ['', Validators.required],
      degree: ['', Validators.required],
      academicrank: ['', Validators.required],

    });

    return a;
}

// requetIdComplainNavigations: {bbbb:'',Bbb:0,},
// requetIdHandleNavigations: {bbbb:'',Bbb:0,},
// idRoleClaims: {bbbb:'',Bbb:0,},
getFormGroupData(data :any):FormGroup{

    // return this.formBuilder.group({
    //     id : data.id,
    //     username :data.username,
    //     password :data.password,
    //     idRole :data.idRole,
    //     idDepartment:data.idDepartment,
    //     fullname:data.fullname,
    //     emailaddress:data.emailaddress,
    //     phonenumber : data. phonenumber,
    //     address:data.address,
    //     citizenidentification:data.citizenidentification,
    //     dateofbirth:data. dateofbirth,
    //     sex :data. sex,
    //     status : data.status,
    //     role:data.role,
    //     class:data.class,
    //     schoolyear:data.schoolyear,
    //     degree:data.degree,
    //     academicrank:data.academicrank,
    //     idDepartmentNavigation : this.formBuilder.group({
    //         id:0,
    //         tenDepartment:'',
    //         describe : '',
    //         address :'',
    //         status : false,
    //     }),
    //       idRoleNavigation:this.formBuilder.group({
    //         id: 0,
    //         name: '',
    //         describe: '',
    //       }),
    // });
    return this.formBuilder.group({

    });
}

 async GetAllRoles(){
      return await    lastValueFrom(this.http.get(this.url.baseRolesUrl));
  }
  async GetAllDepartment(){
    return await    lastValueFrom(this.http.get(this.url.baseDepartments));
  }
    async GetAccount(id:string){

    return await lastValueFrom(this.http.get(this.url.baseUrl+"/get"+id));
  }

  async PostAccount(data:any){
    return await lastValueFrom(this.http.post(this.url.baseChuyenBayUrl+"/api/account/postaccount/",data));
  }
  async DeleteAccount(id:string){
    return await lastValueFrom(this.http.delete(this.url.baseChuyenBayUrl+"/api/account/detaleaccount/"+id));
  }
  async PutAccount(data:any,id:string){
    return await lastValueFrom(this.http.put(this.url.baseChuyenBayUrl+"/api/account/postaccount/"+id,data));
  }

}

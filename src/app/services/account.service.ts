import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UrlApi } from "./baseurl.services";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import {  lastValueFrom} from "rxjs";
import { RegexApi } from "./regex.service";
import { Account } from "../models/account.model";
import { ValidatorData } from "./validatorData.service";




@Injectable()
export class AccountService {
    [x: string]: any;

  constructor(private http:HttpClient,private url:UrlApi,private formBuilder:FormBuilder,private regex:RegexApi,
  private validatorData:ValidatorData
    ) {
   // private convert:ConvertDate
  }
  async getAll(){
    return await lastValueFrom(this.http.get(this.url.baseAccountsUrl));
  }
  async GetAccounts(){

    return await lastValueFrom(this.http.get(this.url.baseUrl+"/api/account/getall"));
  }
  //Nơi lưa trữ account login
   GetAccountLogin() :Account{
    var account = new Account();
    account = {id:1,fullname:'fdsfsf',username:'met@gmail.com'};
    account.idRole=1;

    return account;
  }
  //HttpHeaders
    GetHttpHeaders():HttpHeaders{
          const account = this.GetAccountLogin();
          return   new HttpHeaders({
            'session-id':account.username+account.id,
          });

    }
  getFormGroupRoleClaim(data?:Account):FormGroup{
    var a = this.formBuilder.group({
        Idrole :[['1','2'],[]]

    })
    var roleList = [];
    //console.log(data);
    //data.idRoleClaims?.forEach(role=>roleList.push(role.id+''));

  //  a.controls.Idrole.setValue(roleList);
    return a ;

  }
  getFormGroup(data?:Account):FormGroup{

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
      id:0 ,
      username: ['', Validators.required],
      password: ['', [Validators.minLength(8)]],
      idRole: ['3', Validators.required],
      idDepartment: ['1', Validators.required],
      fullname: ['', Validators.required],
      emailaddress: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern(this.regex.PhoneNumber)]],
      address: ['', Validators.required],
      citizenidentification: [''],
      dateofbirth: ['', Validators.required],
      sex: ['false', Validators.required],
      status: ['true', Validators.required],
      role: ['student', Validators.required],
      class: ['',Validators.required],
      schoolyear: ['',Validators.required],
      degree: ['',Validators.required],
      academicrank: ['',Validators.required],
      confirmPassword: ['',[]],


    },{validators:this.validatorData.matchPasswordsValidator('confirmPassword','password')}
    );
    //cho email == username
    a.controls.emailaddress.valueChanges.subscribe(value=>{
      a.patchValue({
        username : value,
      })


    });
    //phân biệt thuộc tính học sinh sinh viên
    a.controls.role.valueChanges.subscribe(value=>{
        if(value==='student'){
          a.controls.academicrank.disable() ;
          a.controls.academicrank.setValue('');
          a.controls.degree.disable();
          a.controls.degree.setValue('');

          a.controls.class.enable();
          a.controls.schoolyear.enable();
        }
        else{
          a.controls.class.disable() ;
          a.controls.class.setValue('');
          a.controls.schoolyear.disable();
          a.controls.schoolyear.setValue('');

          a.controls.degree.enable() ;
          a.controls.academicrank.enable();
        }
    });
    //trường hợp có data
    if(data!=null) {
    a.controls.id.setValue(data.id);
    a.controls.username.setValue(data.username);

    a.controls.idRole.setValue(data.idRole+"");
    a.controls.idDepartment.setValue(data.idDepartment+"");
    a.controls.fullname.setValue(data.fullname);
    a.controls.emailaddress.setValue(data.emailaddress);
    a.controls.phonenumber.setValue(data.phonenumber);
    a.controls.address.setValue(data.address);

    a.controls.dateofbirth.setValue(data.dateofbirth+"");
    a.controls.sex.setValue(data.sex+"");
    a.controls.status.setValue(data.status+"");
    a.controls.role.setValue(data.role);
    a.controls.class.setValue(data.class);
    a.controls.schoolyear.setValue(data.schoolyear);
    a.controls.degree.setValue(data.degree);
    a.controls.academicrank.setValue(data.academicrank);
    //Thêm disable tương ứng
    a.controls.citizenidentification.disable();

    }else{
      a.controls.role.setValue('student');
      a.controls.password.disable();
      a.controls.confirmPassword.disable();
      a.controls.citizenidentification.disable();
    }

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
  async CheckEmailExists(account:string ,id?:string ){
    //checkEmailExists/adasdad@gmail.com
    return await lastValueFrom(this.http.get(this.url.baseAccountsUrl+'/checkEmailExists/'+account+(id!=null?'/'+id:'')));
  }
 async GetAllRoles(){
    const ab = this.GetHttpHeaders();
    const headers = ab;
      return await    lastValueFrom(this.http.get(this.url.baseRolesUrl,{headers}));
  }
  async GetAllDepartment(){
    return await    lastValueFrom(this.http.get(this.url.baseDepartments));
  }
  async getAllRoleCliam(){
    return await    lastValueFrom(this.http.get(this.url.baseRoleClaimsUrl));
  }
    async GetAccount(id:string){
      const ab = this.GetHttpHeaders();
      const headers = ab;
    return await lastValueFrom(this.http.get(this.url.baseAccountsUrl+"/"+id,{headers}));
  }

  async PostAccount(dataAccout:Account,dataFile:File){
    console.log(dataAccout);
    var formSubmit = new FormData();
    formSubmit.append('file',dataFile);
    formSubmit.append('dataAccount',JSON.stringify(dataAccout));
  return await lastValueFrom(this.http.post(this.url.baseAccountsUrl,formSubmit));
  }

  async DeleteAccount(id:string){
    return await lastValueFrom(this.http.delete(this.url.baseChuyenBayUrl+"/api/account/detaleaccount/"+id));
  }
  async PutAccount(dataAccount :any,dataFile:File,id:string,dataRoleClaim?:any ){
    var formSubmit = new FormData();
    formSubmit.append('file',dataFile);
    formSubmit.append('dataAccount',JSON.stringify(dataAccount));
    formSubmit.append('dataRoleClaim',JSON.stringify(dataRoleClaim));
    const ab = this.GetHttpHeaders();
    const headers = ab;
    return await lastValueFrom(this.http.put(this.url.baseAccountsUrl+"/"+id,formSubmit,{headers}));
  }

}

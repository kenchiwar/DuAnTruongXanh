import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UrlApi } from "./baseurl.services";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import {  lastValueFrom} from "rxjs";
import { RegexApi } from "./regex.service";
import { Account } from "../models/account.model";
import { ValidatorData } from "./validatorData.service";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";




@Injectable()
export class AccountService {
    [x: string]: any;

  constructor(private http:HttpClient,private url:UrlApi,private formBuilder:FormBuilder,private regex:RegexApi,
  private validatorData:ValidatorData,
  private router:Router
    ) {
   // private convert:ConvertDate
  }
  async getAll(){
    return await this.SendApi('get',this.url.baseAccountsUrl);
  }
  async GetAccounts(){

    return await lastValueFrom(this.http.get(this.url.baseUrl+"/api/account/getall"));
  }
  //Nơi lưa trữ account login
   GetAccountLogin() :Account{

    // account = {id:1,fullname:'fdsfsf',username:'met@gmail.com'};
    // account.idRole=1;

    // return account;
    // var data = localStorage.getItem('account');

    // account = JSON.parse(data) as Account;

    // return account??null;
    var data = localStorage.getItem('account');
    try {
      var account = JSON.parse(data) as Account;
      return account??null;
    } catch (error) {


    return null;

    }
  }
  //HttpHeaders

    GetHttpHeaders():HttpHeaders{
        try {
          const account = this.GetAccountLogin();
         
          return   new HttpHeaders({
            'username':account?.username??'',
            'password':account?.password??''
          });
        } catch (error) {
          return   new HttpHeaders({

          });
        }


    }
    async SendApi(type:string ,url :string , formData?:FormData){
      const ab = this.GetHttpHeaders();
      const headers = ab;

      switch(type.toLowerCase()){

          case 'get':
            return await lastValueFrom(this.http.get(url,{headers}));
          case 'post':
            if(formData != null){
              return await lastValueFrom(this.http.post(url,formData,{headers}));
            }else {
              console.log("fdsdsfs");
              console.log(headers);
              return await lastValueFrom(this.http.post(url,{headers}));
            }
            
            case 'put':if(formData != null){
              console.log("fdsdsfs1");
              console.log(headers);
              return await lastValueFrom(this.http.put(url,formData,{headers}));
            }else {
              return await lastValueFrom(this.http.put(url,{headers}));
            }
              
            case 'delete':return await lastValueFrom(this.http.delete(url,{headers}));
        }

        return await lastValueFrom(this.http.get(url));

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


    },{validators:this.validatorData.matchPasswordsValidator('password','confirmPassword')}
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

    a.controls.dateofbirth.setValue(data.dateofbirth+'');

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
  getFormGroupLogin(data?:string[]):FormGroup{
    var a = this.formBuilder.group({

      emailaddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPassword: ['',[]],
      input1:['', [Validators.required]],
      input2:['', [Validators.required]],
      input3:['', [Validators.required]],
      input4:['', [Validators.required]],
      input5:['', [Validators.required]],
      input6:['', [Validators.required]],


    },{validators:this.validatorData.matchPasswordsValidator('password','confirmPassword')}
    );


      for (const field in a.controls) {
        const control = a.get(field);
        control.disable();
      }

    if(data==null){
      a.controls.input1.enable();
      a.controls.input2.enable();
      a.controls.input3.enable();
      a.controls.input4.enable();
      a.controls.input5.enable();
      a.controls.input6.enable();
    }else{

      data.forEach(da=>{
        a.get(da).enable();
      });
    }

    return a;
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
    return await    lastValueFrom(this.http.get(this.url.baseDepartments+'/getDepartment'));
  }
  async getAllRoleCliam(){
    return await    lastValueFrom(this.http.get(this.url.baseRoleClaimsUrl));
  }
    async GetAccount(id:string){
      const ab = this.GetHttpHeaders();
      const headers = ab;
    return await lastValueFrom(this.http.get(this.url.baseAccountsUrl+"/"+id,{headers}));
  }
  async GetAccountDetail(id:string){
    const ab = this.GetHttpHeaders();
    const headers = ab;
  return await lastValueFrom(this.http.get(this.url.baseAccountsUrl+"/detail/"+id,{headers}));
}

  async PostAccount(dataAccout:Account,dataFile:File){
   
    var formSubmit = new FormData();
    formSubmit.append('file',dataFile);
    formSubmit.append('dataAccount',JSON.stringify(dataAccout));
  return await lastValueFrom(this.http.post(this.url.baseAccountsUrl,formSubmit));
  }

  async DeleteAccount(id:string){
    return await lastValueFrom(this.http.delete(this.url.baseAccountsUrl+'/'+id));
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
  async Login(username:string,password:string){
      return await this.SendApi('get',this.url.baseAccountLoginUrl+"/login/"+username+'/'+password);
  }
   Logout(){
    localStorage.removeItem('account');
    localStorage.removeItem('username_expiration');
    // localStorage.setItem('accthen(() => { this.router.navigate([this.router.url]); }); ount', JSON.stringify(account));
    this.router.navigate(['/error'],{skipLocationChange:true}).then(() => { this.router.navigate([this.router.url]) });
    // localStorage.setItem('username_expiration',Date.now()+12 * 60 * 60 * 1000 +'');
  }
  async getCodeSecurity(username:string){

    return await lastValueFrom(this.http.get("https://localhost:7007/api/AccountLogin/sendChangPass/"+username));
    // return await this.SendApi('get',this.url.baseAccountLoginUrl+"/sendChangPass");
  }
  async ChangPass(username:string,password:string)
  {
    return await this.SendApi('get',this.url.baseAccountLoginUrl+"/changePass/"+username+'/'+password);
  }
  async ChangImage(dataFile:File){
    var formSubmit = new FormData();
    formSubmit.append('file',dataFile);


    return await this.SendApi('post',this.url.baseAccountLoginUrl+"/changeImage",formSubmit);
  }
   ChangAccountLoginNotUpdate( account:Account ){
    localStorage.setItem('account',JSON.stringify(account));

  }



}

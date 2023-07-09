import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { catchError, lastValueFrom, of } from "rxjs";
import { UrlApi } from "./baseurl.services";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ChuyenBay } from "../models/chuyenbay.models";

import { ConvertDate } from "./convertDate.services";



@Injectable()
export class ChuyenBayServices {

  constructor(private http:HttpClient,private url:UrlApi,private formBuilder:FormBuilder,private convert:ConvertDate) {}


  async getAll(){

    return await lastValueFrom(this.http.get(this.url.baseUrl+"/api/ChuyenBays"));
  }
  getFormGroup():FormGroup{

      return this.formBuilder.group({
        macb : 0,
        tencb :'',
        ngaydi :'',
        sogheloai1 :0,
        giagheloai1:0 ,
        giagheloai2:0,
        sogheloai2:0,

      });
  }
  getFormGroupData(data:ChuyenBay):FormGroup{
      return this.formBuilder.group({
        macb : data.macb,
        tencb :data.tencb,
        ngaydi :this.convert.convert(data.ngaydi),
        sogheloai1 :data.sogheloai1,
        giagheloai1:data.giagheloai1,
        giagheloai2:data.giagheloai2,
        sogheloai2:data.sogheloai2,

      });
  }
  async Add(data:any){

    return await lastValueFrom(this.http.post(this.url.baseUrl+"/api/ChuyenBays",data));
  }
  async getId(data:string){
    return await lastValueFrom(this.http.get(this.url.baseChuyenBayUrl+"/"+data));
  }
  async Update(data:any,id:string){
    return await lastValueFrom(this.http.put(this.url.baseChuyenBayUrl+"/"+id,data))
  }
  async Delete(id:string){

    return  await lastValueFrom(this.http.delete(this.url.baseChuyenBayUrl+"/"+id));
    //return await lastValueFrom(this.http.delete(this.url.baseChuyenBayUrl+"/"+id));
  }
  async getDetailId(data:string){
    return await lastValueFrom(this.http.get(this.url.baseChuyenBayUrl+"/detail/"+data));
  }
  async getIdVe(data:string){
    return await lastValueFrom(this.http.get(this.url.baseChuyenBayUrl+"/idve/"+data));
  }
  async getAllDetail(){
    return await lastValueFrom(this.http.get(this.url.baseChuyenBayUrl+"/detail"));
  }

}

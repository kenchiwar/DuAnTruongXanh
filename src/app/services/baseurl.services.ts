import { Injectable } from "@angular/core";




@Injectable()
export class UrlApi{
   readonly  baseUrl  : string = "http://localhost:5138" ;
   readonly  baseChuyenBayUrl:string = this.baseUrl+"/api/ChuyenBays";
   readonly  baseVeUrl:string = this.baseUrl+"/api/Ves";

}


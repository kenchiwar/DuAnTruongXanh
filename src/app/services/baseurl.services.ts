import { Injectable } from "@angular/core";
import { UrlService } from "./url.services";




@Injectable()
export class UrlApi{
  readonly urlService = new UrlService();
   readonly  baseUrl  : string = this.urlService.baseUrl ;
   readonly  baseChuyenBayUrl:string = this.baseUrl+"/api/ChuyenBays";
   readonly  baseVeUrl:string = this.baseUrl+"/api/Ves";

}


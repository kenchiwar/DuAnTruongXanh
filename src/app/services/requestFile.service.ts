import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlApi } from './baseurl.services';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestFile } from '../models/requestfile.model';
import { lastValueFrom } from 'rxjs';
@Injectable()

export class RequestFileService {
    [x: string]: any;

    constructor(private http:HttpClient,private url:UrlApi,private formBuilder:FormBuilder) {
     // private convert:ConvertDate
    }

    getFormGroup(){

        var requestFileForm =  this.formBuilder.group({
            id: 0,
            name: '',
            idRequest: '1',
        });
        return requestFileForm;
    }

    async createdRequestFile(formData: FormData){
        return await lastValueFrom(this.http.post("http://localhost:7007/api/requestFile/requestFile", formData))
    }
}
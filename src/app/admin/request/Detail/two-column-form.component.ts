import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requet } from 'src/app/models/request.model';
import { RequestFile } from 'src/app/models/requestfile.model';
import { Requetsdetailed } from 'src/app/models/requetsdetailed.model';
import { RequestServices } from 'src/app/services/request.service';

@Component({
  selector: 'app-two-column-form',
  templateUrl: './two-column-form.component.html',
  styleUrls: ['./two-column-form.component.css'] // Đường dẫn tới file CSS của component
})
export class TwoColumnFormComponent implements OnInit{
  request : Requet;
  requestDetail : Requetsdetailed;
    requestFile : RequestFile[]
    constructor(
        private router :Router,
        private activatedRoute : ActivatedRoute,
        private requestService : RequestServices
    ){}
    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            var id = params.get('id');
            this.requestService.GetRequestById(id).then(
                res => {this.request = res as Requet
                
                },
                err => {console.log(err);}
            )
            this.requestService.GetRequestFile(id).then(
                res => {this.requestFile = res as RequestFile[]
                },
                err => {console.log(err);}
            )
            this.requestService.GetRequestDetail(id).then(
                res => {this.requestDetail = res as Requetsdetailed
                },
                err => {console.log(err);}
            )
        })
    }
}

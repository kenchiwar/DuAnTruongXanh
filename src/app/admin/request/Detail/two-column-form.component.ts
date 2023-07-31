import { lastValueFrom } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requet } from 'src/app/models/request.model';
import { RequestFile } from 'src/app/models/requestfile.model';
import { Requetsdetailed } from 'src/app/models/requetsdetailed.model';
import { RequestServices } from 'src/app/services/request.service';
declare var $ : any;
@Component({
  selector: 'app-two-column-form',
  templateUrl: './two-column-form.component.html',
  styleUrls: ['./two-column-form.component.css'] // Đường dẫn tới file CSS của component
})
export class TwoColumnFormComponent implements OnInit{
    request : Requet;
    reqD : Requetsdetailed
    requestDetails : Requetsdetailed[];
    requestFile : RequestFile[]
    requestFileDetail : RequestFile[]
    ListFile : []

    idDetailFile: any;
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
                    
                    // this.requestFile.forEach(file => {
                    //     this.idDetailFile = this.getIdFromFile(file.name);
                    // })
                },
                err => {console.log(err);}
            )
            this.requestService.GetRequestDetailFile(id).then(
                res => {
                    this.requestDetails = res as Requetsdetailed[]
                    
                    
                },
                err => {console.log(err);}
            )

            this.requestService.GetRequestDetail(id).then(
                res => {this.reqD = res as Requetsdetailed},
                err => {console.log(err);}
            )
        })
        setTimeout(()=>{
            $('#index-request1').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": true,
              "ordering": true,
              "info": true,
              "autoWidth": true,
              "responsive": true,          
              "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
            }).buttons().container().appendTo('#index-request1_wrapper .col-md-6:eq(0)');;
          },1000);
        
        
    }

      getIdFromFile(fileName: any){
        // Giả sử tên file có định dạng "_id={số}.png"
        var startIndex = fileName.lastIndexOf('_id=') + 4;
        var endIndex = fileName.lastIndexOf('.png');
        if (startIndex !== -1 && endIndex !== -1) {
            var str = fileName.substring(startIndex, endIndex);
            var intId = parseFloat(str);
          return str;
        }
        return "Khong tim thay id"; // Hoặc trả về một giá trị mặc định nếu không tìm thấy
      }
}

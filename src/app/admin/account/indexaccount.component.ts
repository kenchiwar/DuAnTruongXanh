import { AfterViewInit, Component, OnInit, } from "@angular/core";
import { Account } from "src/app/models/account.model";
import { Department } from "src/app/models/department.model";
import { Requet } from "src/app/models/request.model";
import { AccountService } from "src/app/services/account.service";
import { UrlApi } from "src/app/services/baseurl.services";
import { RequestServices } from "src/app/services/request.service";

import { ValidatorData } from "src/app/services/validatorData.service";
declare var $ : any;
declare let Chart: any;

@Component({
       templateUrl : './indexaccount.component.html'

})
export class IndexAccountComponent implements OnInit ,AfterViewInit{
  [x: string]: any;

    constructor(

        private accountService :AccountService,

        public validatorService:ValidatorData,
        private urlApi:UrlApi,
        private requestService:RequestServices,
    ){}

    dataAccounts:Account[];
    dataAll:Account[];
      urlImg:string;
      textSearch:string;
      statusSearch:boolean;
      accountLogin:Account;
      isLoading:boolean;
      //been thống kê
      dataRequest:Requet[];
      dataDepartments: Map<string,number>;
      allDepartments:Department[];
      allRequest:Requet[];
      //Request của thằng idHandle
      countRequest:Request[];

      dataMonth:{
        new:number[],
        nowSolve :number[],
        solve:number[],
      };
    //  [0,0,0,0,0,0,0,0,0,0,0,0]
      ngAfterViewInit(): void {

        this.allRequest=[];
        this.allDepartments=[];
        this.dataDepartments=new Map();
        this.dataRequest=[];
        this.dataMonth = {
          solve: [0,0,0,0,0,0,0,0,0,0,0,0],
          nowSolve:[0,0,0,0,0,0,0,0,0,0,0,0],
          new:[0,0,0,0,0,0,0,0,0,0,0,0]
        }
        this.requestService.GetRequets().then(dataRequest =>{
          this.accountService.GetAllDepartment().then(departments=>{
            this.allDepartments = departments as Department[];
            this.allRequest = dataRequest as Requet[];
            this.allDepartments.forEach(a=>{
                this.dataDepartments.set(a.tenDepartment,0);
            });
            console.log(this.dataDepartments);



            const idAccountLogin = this.accountLogin.id;

            console.log(this.allRequest);
            this.allRequest.forEach(b=>{
                this.dataDepartments.set(b.idDepartmentNavigation.tenDepartment,this.dataDepartments.get(b.idDepartmentNavigation.tenDepartment)+1);
                const month = new Date(b.sentDate).getMonth();
                 const status = b.status;
                 if(status==0){
                  this.dataMonth.new[month] ++;
                 }else if(status<=3){
                  this.dataMonth.nowSolve[month] ++;
                 }else{
                  this.dataMonth.solve[month] ++;
                 }


                 if(idAccountLogin == b.idHandleNavigation.id && (0<status&& status<=3)){

                  this.dataRequest.push(b);
                 }

            });
            this.accountLogin.requetIdHandleNavigations = this.dataRequest ;
            this.accountService.ChangAccountLoginNotUpdate(this.accountLogin);

            const data1 = {
              labels: ['January', 'February', 'March', 'April', 'May','June','July', 'August', 'September', 'October', 'November', 'December'],
              datasets: [
                {
                  label: 'New',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  data: this.dataMonth.new,
                },
                {
                  label: 'Solve',
                  backgroundColor: 'rgba(54, 162, 235, 0.5)',
                  data: this.dataMonth.nowSolve,
                },
                {
                  label: 'Resolve',
                  backgroundColor: 'rgba(75, 192, 192, 0.5)',
                  data: this.dataMonth.solve,
                },
              ],
            };
            var color2=[
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(128, 98, 214)',
                'rgb(255, 210, 215)',
                'rgb(145, 200, 228)',
                'rgb(241, 26, 123)',
                'rgb(152, 33, 118)',
                'rgb(255, 176, 127)',
                'rgb(231, 177, 10)',

            ];

            const data2 = {
              labels:Array.from(this.dataDepartments.keys()),

              datasets: [{
                label: 'My First Dataset',
                data: Array.from(this.dataDepartments.values()),
                backgroundColor:color2,
                hoverOffset: 4
              }]
            };
            //THee
            // Get the canvas element
            const ctx1 = document.getElementById('myChart1');
            const ctx2 = document.getElementById('myChart2');

            // Create the stacked bar chart
            const stackedChart = new Chart(ctx1, {
              type: 'bar',
              data: data1,
              options: {
                plugins: {
                  title: {
                    display: true,
                    text: 'Chart.js Bar Chart - Stacked'
                  },
                },
                responsive: true,
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true
                  }
                }
              }
            });
            const stackedChart2 = new Chart(ctx2, {
              type: 'pie',
              data: data2,
              options: {
                plugins: {
                  title: {
                    display: true,
                    text: 'Chart.js pie Chart - Stacked'
                  },
                },
              }

            });




          })





        }).catch(error =>{
          this.validatorService.getNotification(false,"can not load data ")
        })

        // Chart.register(ChartjsPluginStacked100.default);




        // Chart.register(ChartjsPluginStacked100.default);






      }



    ngOnInit(): void {

      // this.loadScript('assets/fileadmin/dist/js/chart.js');
      this.textSearch='';
      this.isLoading=false;
      this.statusSearch=false;
      this.urlImg=this.urlApi.baseUrl;
        this.accountService.getAll().then(dataAccount=>{
          this.dataAll = dataAccount as Account[];
          this.dataAccounts=this.dataAll;
          this.accountLogin=this.accountService.GetAccountLogin();
          setTimeout(()=>{
            $('#TableAccount').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": true,
              "ordering": true,
              "info": true,
              "autoWidth": true,
              "responsive": true,
              "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
            }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
          },1000);

        }).catch(error => {
              this.validatorService.getErrorRouterChange("Can't load the data Account");
        });

    }
    delete(id:number,mess:string ):void {
        if(!confirm(`Are you sure you want to delete `+mess)) return ;
        this.isLoading=true;
        try {
          var account = this.dataAccounts.find(a=>a.id==id);


          if(!(this.accountLogin.idRole<account.idRole)) {
            alert('Don\'t permission');
            setTimeout(()=>{
              this.isLoading=false;
            },2000);
              return ;
          }

          this.accountService.DeleteAccount(id+'').then(success=>{
                this.validatorService.getNotification(true,'Delete Success');
          }).catch(error=>{
            this.validatorService.getNotification(false,"Delete not succes",error);

          })
          .finally(()=>{
            setTimeout(()=>{
              this.isLoading=false;
            },2000);

          });
        } catch (error) {

          this.validatorService.getNotification(false,"Delete not succes",error);
          setTimeout(()=>{
            this.isLoading=false;
          },2000);

        }



    }
    update(id:number):void {

    }
    details(id:number):void {



    }
    search(){

    }
    reload(){
      this.ngOnInit();
    }


  loadScript(url: string) {
      const script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    }


}

import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../services/account.service";

declare let Chart: any; 
declare let $: any; 
@Component({
       templateUrl : './indexadmin.component.html',
       styleUrls: ["./style.component.css"],

})
export class IndexAdminComponent implements OnInit,AfterViewInit {
    username : string;
    photo : string;
    constructor(
        private router :Router,
        private accountService : AccountService
    ){}
  ngAfterViewInit(): void {
    
    const scriptUrls = [
    // 'assets/fileadmin/plugins/jquery-ui/jquery-ui.min.js',
    // 'assets/fileadmin/plugins/bootstrap/js/bootstrap.bundle.min.js',
    // 'assets/fileadmin/plugins/chart.js/Chart.min.js',
    // 'assets/fileadmin/plugins/sparklines/sparkline.js',
    // 'assets/fileadmin/plugins/jqvmap/jquery.vmap.min.js',
    // 'assets/fileadmin/plugins/jqvmap/maps/jquery.vmap.usa.js',
    // 'assets/fileadmin/plugins/jquery-knob/jquery.knob.min.js',
    // 'assets/fileadmin/plugins/moment/moment.min.js',
    // 'assets/fileadmin/plugins/daterangepicker/daterangepicker.js',
    // 'assets/fileadmin/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js',
    // 'assets/fileadmin/plugins/summernote/summernote-bs4.min.js',
    // 'assets/fileadmin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js',
    // 'assets/fileadmin/dist/js/adminlte.js',
    // 'assets/fileadmin/dist/js/demo.js',
    // 'assets/fileadmin/dist/js/pages/dashboard.js',
    // 'assets/fileadmin/plugins/datatables/jquery.dataTables.min.js',
    // 'assets/fileadmin/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js',
    // 'assets/fileadmin/plugins/datatables-responsive/js/dataTables.responsive.min.js',
    // 'assets/fileadmin/plugins/datatables-responsive/js/responsive.bootstrap4.min.js',
    // 'assets/fileadmin/plugins/datatables-buttons/js/dataTables.buttons.min.js',
    // 'assets/fileadmin/plugins/datatables-buttons/js/buttons.bootstrap4.min.js',
    // 'assets/fileadmin/plugins/jszip/jszip.min.js',
    // 'assets/fileadmin/plugins/pdfmake/pdfmake.min.js',
    // 'assets/fileadmin/plugins/pdfmake/vfs_fonts.js',
    // 'assets/fileadmin/plugins/datatables-buttons/js/buttons.html5.min.js',
    // 'assets/fileadmin/plugins/datatables-buttons/js/buttons.print.min.js',
    // 'assets/fileadmin/plugins/datatables-buttons/js/buttons.colVis.min.js',
    'assets/fileadmin/dist/js/main.js',
    'assets/fileadmin/plugins/chart.js/Chart.min.js',
    // 'https://cdn.jsdelivr.net/npm/chartjs-plugin-stacked100@1.0.0',
     
    ];
    scriptUrls.forEach(url => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;//urrl 
      script.async=true;
      // Chart.register(ChartjsPluginStacked100.default);
      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'bar',
       
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'test 1',
            data: [12, 19, 3, 5, 15, 3],
            borderWidth: 1,
            borderColor: '#36A2EB',
            backgroundColor:
              'red',            
          },{
          label: 'test2',
          data: [9, 12, 3, 5, 20, 3],
          borderWidth: 1,
          borderColor: '#36A2EB',
          backgroundColor:
            'yellow'
        },{
          label: 'test3',
          data: [10, 14, 3, 5, 10, 3],
          borderWidth: 1,
          borderColor: '#36A2EB',
          backgroundColor:
            'blue',
        }
        ],
        },
        options: {
          plugins:{
            stacked100:{
              enabled: true,
            }
          },
          scales: {
            x: {
              stacked: true,
            },
            y: {
              beginAtZero : true,
              stacked: true
            }
          }
        }
      });
    
      document.body.appendChild(script);
    });
  }
    ngOnInit(): void {
     
      // setInterval(function() {
      //   const expiration = localStorage.getItem('username_expiration');
      //   if (expiration && Date.now() > parseInt(expiration)) {
      //     localStorage.removeItem('account');
      //     localStorage.removeItem('username_expiration');
      //   }
      // }, 10000);
      this.username = this.accountService.GetAccountLogin().username;
      this.photo = this.accountService.GetAccountLogin().citizenidentification;
    }
    loadScript(url: string) {
        const script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
      }

}

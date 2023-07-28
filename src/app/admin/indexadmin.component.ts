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
      const data1 = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [10, 15, 20, 25, 30],
          },
          {
            label: 'Dataset 2',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            data: [5, 10, 15, 20, 25],
          },
          {
            label: 'Dataset 3',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [15, 20, 10, 5, 0],
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
        labels: [
          'Red',
          'Blue',
          'Yellow',
          '32121'
        ],
       
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100,33],
          backgroundColor:color2,
          hoverOffset: 4
        }]
      };
    
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

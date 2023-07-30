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
    'assets/fileadmin/dist/js/main.js',
    'assets/fileadmin/plugins/chart.js/Chart.min.js',
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

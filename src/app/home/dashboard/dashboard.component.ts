import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('barChart', {static: true}) barChart!: ElementRef;
  @ViewChild('barChartTwo', {static: true}) barChartTwo!: ElementRef;
  @ViewChild('pieChart', {static: true}) pieChart!: ElementRef;
  @ViewChild('redmineBarChart', {static: true}) redmineBarChart!: ElementRef;
  redmineBarChartRef: any;
  chart: any;
  chartTwo: any;
  pieChartRef: any;

  constructor() { }

  ngOnInit(): void {
    this.createBarChart();
    this.createPieChart();
    this.createBarChartTwo();
    this.createRedmineBarChart();
  }

  createBarChart() {
    const ctx = this.barChart.nativeElement.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
          {
            label: 'Vendas',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createBarChartTwo() {
    const ctx = this.barChartTwo.nativeElement.getContext('2d');

    this.chartTwo = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
          {
            label: 'Vendas',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createPieChart() {
    const ctx = this.pieChart.nativeElement.getContext('2d');

    this.pieChartRef = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E'],
        datasets: [
          {
            label: 'Vendas por Produto',
            data: [30, 15, 20, 10, 25],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
          }
        ]
      }
    });
  }

  createRedmineBarChart() {
    const ctx = this.redmineBarChart.nativeElement.getContext('2d');

    //const projectLabels = redmineData.map(item => item.project);
    //const issuesCountData = redmineData.map(item => item.issuesCount);

    this.redmineBarChartRef = new Chart(ctx, {
      type: 'bar',
      data: {
      //  labels: projectLabels,
        datasets: [
          
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
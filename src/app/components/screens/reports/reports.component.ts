import { Component, OnInit } from '@angular/core';
import { ChartsComponent } from '../../charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartDetails } from '../../../models/chart.details';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [ChartsComponent, NgApexchartsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent implements OnInit {
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  chart: ChartDetails = {
    title: '3 perguntas com maior nota GPTW',
    categories: ['A liderança é competente para tocar o negócio', 'A liderança age de acordo com o que fala', 'Eu recebo os equipamentos e recursos necessários para realizar meu trabalho'],
    series: [
      {
        name: 'Carros por ano',
        data: [88, 85, 80],
      },
    ],
  };
  series = [...this.chart.series];
  charts: any = {
    height: 350,
    type: 'bar',
  };
  title: any = {
    text: this.chart.title,
  };
  xaxis: any = {
    categories: this.chart.categories,
  };
}

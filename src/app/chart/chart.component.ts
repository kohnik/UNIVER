import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../core/services/authService/auth.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

import { Color, Label } from 'ng2-charts';
import { DataService } from "../core/services/dataService/data.service";
import { DataForCharts, PeriodicElement, Sensor } from "../shared/interface";

interface Region {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {

  displayedColumns: string[] = ['position', 'temperature', 'time', 'region'];
  dataSource: PeriodicElement[] = [];

  public selectedValue: string = ''
  public minTemperature?: number;
  public maxTemperature?: number;
  public range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  public foods: Region[] = [
    {value: 'Minsk', viewValue: 'Minsk'},
    {value: 'Brest', viewValue: 'Brest'},
    {value: 'Grodno', viewValue: 'Grodno'},
  ];

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = []
  // @ts-ignore
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
  };

  public lineChartColors: Color[] = []
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(
    public authService: AuthService,
    public dataService: DataService
  ) {
  }

  ngOnInit(): void {
  }

  public showChart() {
    if (this.range.value.start && this.range.value.end && this.selectedValue) {

      this.dataService.getData(this.range.value.start.getTime(), this.range.value.end.getTime(), this.selectedValue).subscribe(data => {
        this.lineChartLabels = []
        this.lineChartData = []
        this.lineChartColors = []

        data.registrations.forEach((item: Sensor, index: number) => {
          this.lineChartLabels.push(`${index}`)
        })

        data.ids.forEach((id: number) => {
          let filteredRegistrations = data.registrations.filter((item: Sensor) => item.sensorId === id)
          let dataOfReg = filteredRegistrations.map((item: Sensor) => {
            return item.temperature
          })
          this.lineChartData.push({data: dataOfReg, label: 'Series'},)
          this.lineChartColors.push({
            borderColor: `${this.generateColor()}`,
            backgroundColor: 'rgba(196, 202, 196, 0)',
          })
        })
        this.setValueFromTable(data)
      }, (data) => {
        alert('САША ЗАПРОС НЕ ПРОШЁЛ')
      })


      this.dataService.getExtremum(this.range.value.start.getTime(), this.range.value.end.getTime()).subscribe(data => {
        this.minTemperature = data.min
        this.maxTemperature = data.max
      }, data => {
        alert('САША ЗАПРОС НЕ ПРОШЁЛ x2')
      })
    }
  }

  public generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  private setValueFromTable(data: DataForCharts) {
    // data = {
    //   "registrations": [
    //     {
    //       "date": 1641397316,
    //       "temperature": 34.7,
    //       "sensorId": 1,
    //       "region": "Minsk"
    //     },
    //     {
    //       "date": 1641483715,
    //       "temperature": 23.6,
    //       "sensorId": 1,
    //       "region": "Minsk"
    //     },
    //     {
    //       "date": 1641310916,
    //       "temperature": 23.6,
    //       "sensorId": 1,
    //       "region": "Minsk"
    //     },
    //     {
    //       "date": 1641570077,
    //       "temperature": 34.5,
    //       "sensorId": 1,
    //       "region": "Minsk"
    //     }
    //   ],
    //   "ids": [
    //     1
    //   ]
    // }
    this.dataSource = data ? data.registrations.map((item, i) => {
      return {
        position: i + 1,
        temperature: `${item.temperature}`,
        time: `${new Date(item.date)}`,
        region: `${item.region}`,
      }
    }) : [];
  }
}

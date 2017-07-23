import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() data = [];

  multi: any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": new Date(2007, 1, 1),
          "value": 100
        },
        {
          "name": new Date(2007, 1, 2),
          "value": 80
        },
        {
          "name": new Date(2007, 1, 4),
          "value": 85
        },
        {
          "name": new Date(2007, 3, 24),
          "value": 90
        },
        {
          "name": new Date(2009, 3, 24),
          "value": 120
        }
      ]
    }
  ];

  view: any[] = [900, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  showYAxisLabel = true;

  showLegend = false;
  xAxisLabel = 'Data';
  yAxisLabel = 'Peso';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

  createDataChart() {
    let data = [];
    // const data: any[] = [];
    let contrato = { name: 'Peso', series: [] };
    let series = [];
    //
    for (var i = 0; i < this.data.length; i++) {
        series.push({
          name: moment(this.data[i].date).toDate(),
          value: this.data[i].value
        });
    }

    contrato.series = series;
    data.push(contrato);

    console.log(data);

    return data;
  }

}

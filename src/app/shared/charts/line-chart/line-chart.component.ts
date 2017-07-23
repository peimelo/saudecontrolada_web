import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  @Input() data = [];

  view: any[] = [900, 600];

  // options
  showXAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Data';

  showYAxis = true;
  showYAxisLabel = true;
  yAxisLabel = 'Peso';

  showTimeline = true;
  showLegend = false;

  gradient = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() { }

  onSelect(event) {
    console.log(event);
  }
}

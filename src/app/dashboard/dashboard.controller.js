(function() {
  'use strict';

  angular
    .module('app')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(moment, PesosResource) {
    var vm = this;

    vm.chartObject = {
      data: {
        cols: [
          { id: 't', label: 'Data', type: 'string' },
          { id: 's', label: 'Peso', type: 'number' }
        ],
        rows: []
      },
      options: {
        hAxis: {
          title: 'Data'
        },
        vAxis: {
          title: 'Peso (kg)'
        }
      },
      type: 'LineChart'
    };
    var pesos = [];

    vm.flotChartData = [
      {
        label: "Peso",
        data: []
      }
    ];

    vm.options = {
      legend: { show: true },
      series: {
        label: "Curved Lines Test",
        curvedLines: {active: true, nrSplinePoints: 20}
      },
      grid: { hoverable: true }, //important! flot.tooltip requires this
      tooltip: {
        show: true,
        content: "%s | x: %x; y: %y"
      },
      yaxes: [{ min:10, max: 90}, {position: 'right'}]
    };

    vm.lineOptions = {
      series: {
        lines: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: {
            colors: [
              {
                opacity: 0.0
              },
              {
                opacity: 0.0
              }
            ]
          }
        }
      },
      xaxis: {
        // tickDecimals: 0,
        mode: 'time'
      },
      colors: ["#1ab394"],
      grid: {
        color: "#999999",
        hoverable: true,
        clickable: true,
        tickColor: "#D4D4D4",
        borderWidth: 0
      },
      legend: {
        show: true
      },
      tooltip: {
        show: true,
    //     cssClass:       string                  //"flotTip"
        content: "%s | X: %x | Y: %y",
    //       xDateFormat:    string                  //null
    // yDateFormat:    string                  //null
        xDateFormat: "%y-%0m-%0d"
    // monthNames:     string                  // null
    // dayNames:       string                  // null
    // shifts: {
    //   x:          int                     //10
    //   y:          int                     //20
    // }
    // defaultTheme:   boolean                 //true
    // lines:          boolean                 //false
    // onHover:        function(flotItem, $tooltipEl)
    // $compat:        boolean                 //false
      }
      // tooltip: true,
      // tooltipOpts: {
      //   content: "x"
      // }
    };

    vm.multiOptions = {
      xaxis: [
        {
          mode: "time",
          timeformat: "%Y"
        }
      ],
      // yaxes: [
      //   {
      //     min: 0
      //   }
      // ],
      // legend: {
      //   position: 'sw'
      // },
      // colors: ["#1ab394"],
      grid: {
        color: "#999999",
        hoverable: true,
        clickable: true,
        tickColor: "#D4D4D4",
        borderWidth: 0

      },
      tooltip: {
        show: true,
        //     cssClass:       string                  //"flotTip"
        content: "%s | X: %x | Y: %y",
        //       xDateFormat:    string                  //null
        // yDateFormat:    string                  //null
        xDateFormat: "%Y-%0m-%0d"
        // xDateFormat: "%Yy-%0m-%0d"
        // monthNames:     string                  // null
        // dayNames:       string                  // null
        // shifts: {
        //   x:          int                     //10
        //   y:          int                     //20
        // }
        // defaultTheme:   boolean                 //true
        // lines:          boolean                 //false
        // onHover:        function(flotItem, $tooltipEl)
        // $compat:        boolean                 //false
      }
      // tooltip: true,
      // tooltipOpts: {
      //   content: "x"
      // }
    };      // tooltip: true,
      // tooltipOpts: {
      //   content: "%s for %x was %y",
      //   xDateFormat: "%y-%0m-%0d",
      //   onHover: function (flotItem, $tooltipEl) {
      //   }
      // }

    // };

    activate();

    function activate() {
      PesosResource.query({ page: 1 },
        function(response) {
          pesos = response.pesos;
          getChart();
        }
      );
    }

    function getChart() {
      var qtde = pesos.length;
      var googleChart = [];
      var flotChart = [];
      var flotPoint = [];

      var linn = [
        {
          label: "line",
          data: [
            [1, 34],
            [2, 22],
            [3, 19],
            [4, 12],
            [5, 32],
            [6, 54],
            [7, 23],
            [8, 57],
            [9, 12],
            [10, 24],
            [11, 44],
            [12, 64],
            [13, 21]
          ]
        }
      ];

      for (var i = qtde - 1; i >= 0; i--) {
        googleChart.push({
          c:[
            { v: moment(pesos[i].data).format('L') },
            { v: pesos[i].valor }
          ]
        });

        flotPoint = [moment(pesos[i].data).valueOf(), pesos[i].valor];
        // flotPoint = [moment(pesos[i].data).format('L'), pesos[i].valor];
        flotChart.push(flotPoint);


      }
      vm.chartObject.data.rows = googleChart;

      vm.flotChartData[0].data = flotChart;
    }
  }
})();


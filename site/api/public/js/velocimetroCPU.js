var gaugeOptions = {
  chart: {
    type: 'solidgauge',
    backgroundColor: '#313131'
  },

  title: null,

  pane: {
    center: ['50%', '85%'],
    size: '140%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#fffffff',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  },

  exporting: {
    enabled: false
  },

  tooltip: {
    enabled: false
  },

  // the value axis
  yAxis: {
    stops: [
      [0.1, '#55BF3B'], // green
      [0.5, '#DDDF0D'], // yellow
      [0.9, '#DF5353'] // red
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: {
      y: -70
    },
    labels: {
      y: 16
    }
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  }
};

// The CPU gauge
var chartCPU = Highcharts.chart('container-cpu', Highcharts.merge(gaugeOptions, {
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: '<span style="color: white">CPU</span>'
    }
  },

  credits: {
    enabled: false
  },

  series: [{
    name: 'CPU',
    data: [0],
    dataLabels: {
      format:
        '<div style="text-align:center; color: white">' +
        '<span style="font-size:25px">{y}</span>%<br/>' +
        '<span style="font-size:12px;opacity:0.4">Em uso</span>' +
        '</div>'
    },
    tooltip: {
      valueSuffix: 'em uso'
    }
  }]

}));

var gaugeOptions = {
  chart: {
    type: 'solidgauge'
  },

  title: null,

  pane: {
    center: ['50%', '85%'],
    size: '140%',
    startAngle: -90,
    endAngle: 90,

    background: {
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#ffffff',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  },

  exporting: {
    enabled: false
  },

  tooltip: {
    enabled: false
  },

  // the value axis
  yAxis: {
    stops: [
      [0.1, '#55BF3B'], // green
      [0.5, '#DDDF0D'], // yellow
      [0.9, '#DF5353'] // red
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: {
      y: -70
    },
    labels: {
      y: 16
    }
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  }
};



var maquina;
var todosLogs;
var ultimoLog;
fetch(`/maquina/especifica/${sessionStorage.hostName}`, {
  method: 'GET',
}).then(function (response) {
  return response.json();
}).then((res) => {
  maquina = res
}).then(() => {
  fetch(`/log/todos/${sessionStorage.hostName}`, {
    method: 'GET',
  }).then(function (response) {
    return response.json();
  }).then((res) => {
    todosLogs = res
  }).then(() => {
    fetch(`/log/ultimo/${sessionStorage.hostName}`, {
      method: 'GET',
    }).then(function (response) {
      return response.json();
    }).then((res) => {
      ultimoLog = res
    }).then(() => {
      chartRAM.series[0].points[0].update(Number(((ultimoLog.usoMemoria * 100) / maquina.qtdMemoria).toFixed(2)));
      chartCPU.series[0].points[0].update(ultimoLog.usoCpu)
      chartDisco.series[0].points[0].update(Number((((maquina.qtdArmazenamento - ultimoLog.usoArmazenamento) * 100) / maquina.qtdArmazenamento).toFixed(2)))
    }).then(() => {
      var dataCpu = []
      var dataRam = []
      var dataDisco = []
      var start = (todosLogs.length - 10);
      for (var i = start; i < todosLogs.length; i++) {
        dataCpu.push([new Date(todosLogs[i].momentoCaptura).getTime(), todosLogs[i].usoCpu])
      }
      for (var i = start; i < todosLogs.length; i++) {
        var dado = Number(((todosLogs[i].usoMemoria * 100) / maquina.qtdMemoria).toFixed(2))
        dataRam.push([new Date(todosLogs[i].momentoCaptura).getTime(), dado])
      }
      for (var i = start; i < todosLogs.length; i++) {
        var dado = Number((((maquina.qtdArmazenamento - todosLogs[i].usoArmazenamento) * 100) / maquina.qtdArmazenamento).toFixed(2))
        dataDisco.push([new Date(todosLogs[i].momentoCaptura).getTime(), dado])
      }

      Highcharts.chart('container', {

        chart: {
           backgroundColor: '#313131',
          color: '#ffffff'


        },

        title: {
          color: '#ffffff',
          text: 'Solar Employment Growth by Sector, 2010-2016'
        },

        subtitle: {
          color: '#FFFFFF',
          text: 'Monitoramento das Máquinas'
        },

        yAxis: {
          title: {
            text: 'Number of Employees'
          }
        },

        xAxis: {
          type: 'datetime'
        },

        time: {
          useUTC: true
        },

        legend: {
          backgroundColor: '#ffffff',
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },

        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            }
          }
        },

        series: [{
          name: 'CPU',
          data: dataCpu
        }, {
          color: '#ba55d3',
          name: 'RAM',
          data: dataRam
        }, {
          color: '#55BF3B',
          name: 'Disco',
          data: dataDisco
        }],

        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }

      })
    })
  })
})
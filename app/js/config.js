var config = {
    sensors: ['temp', 'humidity', 'pressure', 'light'],
    ranges: ['today', 'yesterday', 'lastWeek', 'lastMonth'],
    todayDOM: {
      temp: document.getElementById("dailyChartTemp"),
    },
    yesterdayDOM: {

    }
  }

var DOMConfig_UpdateValues = {
  temp: document.getElementById("actualValueTemp"),
  pressure: document.getElementById("actualValuePressure"),
  humidity: document.getElementById("actualValueHumidity"),
  light: document.getElementById("actualValueLight"),
}

var DOMConfig_GraphSelection = {
  temp: document.getElementById("GraphSelection_temperature"),
  pressure: document.getElementById("GraphSelection_pressure"),
  humidity: document.getElementById("actualValueHumidity"),
  light: document.getElementById("GraphSelection_light")
}

var DOMConfig_CreateCharts = {
      today: {

      },
      yesterday: {

      },
      lastWeek: {

      },
      lastMonth: {

      }
  }

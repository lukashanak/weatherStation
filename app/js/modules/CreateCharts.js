// DEFAULT APEXCHART CONFIG
const defaultOptions = {
  colors:['#F44336'],
  title: {
    text: 'Graf teploty - dnes',
    align: 'center',
    show: 'false'
  },
  tools: {
    download: false
  },
  chart: {
    type:'line',
    zoom: {
      enabled: false
  },
  toolbar: {
    show: false
  }
  },
  series: [{
    name: 'Teplota (°C)',
    data: []
  }],
  xaxis: {
    labels: {
      show: true
  },
  categories: []
}
}




// RUN FUNCTION TODAY() ON LOAD WHICH CREATES DAILY CHART FOR EVERY SENSOR
window.onload = function() {
  today("today","temp");
}


// function which does it all for today charts
function today(timeRange, sensorType) {
  $.get(`./php/getJsonFromDb/${timeRange}/${sensorType}.php`, function(data, status){
   let convertedData = convertData(JSON.parse(data));
   createGraph(convertedData.values, convertedData.categories);
    }
    )}

// ------->  SUB-FUNCTIONS (used for today())
function convertData(data) {
let result = {
  values: [],
  categories: []
}
for (let i=0; i < data.length; i++) {
result.values[i] = data[i].split(",")[0];
result.categories[i] = data[i].split(",")[2];
}
return result;
}

var createGraph = (sensorValues, categories) => {
  let options = Object.assign({}, defaultOptions);
  options.xaxis.categories=categories;
  let rendered = new ApexCharts(document.querySelector("#dailyChartTemp"), options);
  rendered.render();
  rendered.appendData([{
    data: sensorValues
  }]);
}

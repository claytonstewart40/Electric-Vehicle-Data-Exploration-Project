

  //Need to reference chart-container

  const url = "api/data?year=2022";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log("hello") ;
  console.log(data);

    


  var data = [{
    values: [],
    labels: [],
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot('chart-container', data, layout);

});
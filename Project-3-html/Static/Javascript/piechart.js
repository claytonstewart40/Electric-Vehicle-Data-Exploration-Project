

  
const dropdown = document.getElementById('year-select');
let selectedYear = 2022; // Default year, change this as needed

dropdown.addEventListener('change', function(event) {
  selectedYear = event.target.value;
  fetchData(selectedYear);
});

// Function to fetch data from the Flask API
function fetchData(year) {
  const url = `http://127.0.0.1:5000/api/data?year=${year}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Verify the received data in the console

      // Extract make, model, and total count from the data
      const labels = data.data.map(item => `${item[0]} - ${item[1]}`); // item[0] is make, item[1] is model
      const values = data.data.map(item => item[3]);
      
       // Call updatePieChart with the extracted data
       updatePieChart(labels, values);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
// Adjusted function to update the pie chart to use Chart.js
function updatePieChart(labels, values) {
  var ctx = document.getElementById('myPieChart').getContext('2d');
  
  // Check if the chart instance already exists. If so, destroy it before creating a new one
  if (window.myDynamicPieChart != null) {
    window.myDynamicPieChart.destroy();
  }
  
  window.myDynamicPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels, // Your labels array
      datasets: [{
        data: values, // Your data array
        backgroundColor: [
          'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
          // Add more colors as needed
        ]
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Car Make and Model Distribution for ' + selectedYear
      }
    }
  });


      Plotly.newPlot('pieplot', chartData, layout);
    }
    


// Initial data fetch on page load
fetchData(selectedYear);


  //Need to reference chart-container
// format the below string to include the dropdown, look at module 14 or 15 to figure out the dropdown. 
// Get the selected year from the dropdown
// Get the selected year from the dropdown
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
  
  // Function to update the pie chart
  function updatePieChart(labels, values) {
    createPieChart('chart-container', labels, values);

      // Plotting the pie chart using Plotly
      const chartData = [{
        values: values,
        labels: labels,
        type: 'pie'
      }];

      const layout = {
        autosize: true,
        height: 600,
        width: 750,
        title: 'Car Make and Model Distribution'
      };

      Plotly.newPlot('chart-container', chartData, layout);
    }
    


// Initial data fetch on page load
fetchData(selectedYear);
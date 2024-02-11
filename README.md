# Project-3
Project 3 - David Gooch, Clayton Stewart, Robert Crozier, Wilnelia Aviles, David Cortez

Our project sought to see how the electric vehicle population is holding up through out the years in the state of Washington. We believe that there can be ample opportunites to find utility from the visualizations we fleshed out from our data. For instance, as a consumer, you could use the data to evaluate specific models of cars and how they stack up against each other. From the producer's side you could use these charts to give yourself a good idea of the viability of electric vehicles in the automobile market, as well as consumer trends. In turn, the location data could be used as a predictor for forthcoming sales, and finding areas of Washington that could be ideal for advertising to maximize profits. These are just a few of the purposes for which our insights could be used. 


Data source: https://www.kaggle.com/datasets/adilashrafi/elecrict-vehicle

Contributions:

Robert Crozier:  "Electric Vehicle Counts by Make as of 2023" and "Make Vs Model Year(2019)"

Clayton Stewart: "Car Make And Model Distribution"

David Gooch: Interactive "Washington State Electric Vehicle Range by Model Through The Years" scatter and line chart

Wilnelia Aviles: "Top 10 Count of Cars per City", "Top 10 Make distribution count per top 10 County", "total_model_count"

David Cortez: "Electric & Fuel Vehicle Population"



Ethical Considerations:

We initially tried to find a topic that would show how positive EV's are for the environment. However, after going through a few different data sets, we setteled on one that highlighted specific types of vehicles registered in each zipcode of the state of Washington. Ethically, we need to make sure that we didn't use any personal identifiers for the data, for example if we had access to a dataset that had peoples names on it. Secondly, we needed a data set that was big enough to give a picture of how EV's have grown over time, but also not highlighting sensitive information and keeping it as broad as possible. Finally, we put together different charts individually using different data points to create tables and charts to highlight the growth of EV registrations over time.  



How to interact with the project (Instruction Manual): 

Upon opening the webpage.html with "Open with Live Server", you will be brought to the html page showing the different demonstrations of our dataset "Electric Vehicle Population Data: Washington State Electric Vehicle Demographic Data" done with different visualizations. The interactive visualizations first involve the pie chart at the top titled "Car Make And Model Distribution". To interact with the chart, you can click on a selection of years with the dropdown menu directly above it. Then as you hover above the pie chart, you will see summarizations of each piech of the pie. If you click on different make/models in the legend to the right, it will eliminate the selection and show how the chart looks without them. Scrolling down you will see images of our other datasets. Coming down to the bottom of the page, you will see the interactive line chart and scatter plot. Each one shows the summary of the points being shown when hovering the cursor over them, and then, like the pie chart at the top, you can eliminate different items (respectively, Model and Make for the first chart, and just Model for the second), showing how the chart looks without them. Thus concludes the instruction manual. 

<!DOCTYPE html>
<html lang="en">
<head>
        <title>Car Make And Model Distribution</title>
        <style>
          .dropdown-content{
      
          }
          /* Add CSS styles for layout */
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
          }
          .chart-container {
            width: 600px;
            height: 400px;
            margin-top: 20px;
          }
        </style>
          
      </head>
      
      <body>
          <div class="container">
            <!-- <button onclick="toggleDropdown()">Dropdown</button> -->
            <!-- Corrected class name without the extra dot -->
            <div class="dropdown-content">
              <!-- Dropdown for selecting years -->
              <label for="year-select">Select Year:</label>
              <select id="year-select">
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2008">2008</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
                <!-- Add more years as needed -->
              </select>
              <!-- Container for the pie chart -->
              <div id="chart-container" class="chart-container">
                <div id="pieplot"></div>
                <!-- The pie chart will be displayed here -->
                <img src="Static/images/ev_counts_2023.png" alt="Electric Vehicle Counts by Make as of 2023" >
          
                <!-- Image for Electric Vehicles by Make in 2019 -->
                <img src="Static/images/ev_makes_2019.png" alt="Electric Vehicles by Make in 2019">
                
                
      
                
                
          
                <!-- Image for Top 10 Make Distribution Count by County -->
      
                <!-- Image for Total Model Count -->
                

                <img src="Static/images/electric_fuel_vehicle_population.png" alt="Electric & Fuel Vehicle Population">
                <img src="Static/images/Top_10_cars_per_city.png" alt="Top 10 Count of Cars per City">
                <img src="Static/images/top_10_make_distribution_county.png" alt="Top 10 Make Distribution Count by County">
                <img src="Static/images/total_model_count.png" alt="Total Model Count">

                <img src="Static/images/ev_range.png" alt="Electric Vehicle Range Over Years">
                <iframe src="Linechart.html" width="1200" height="600"></iframe>
                <iframe src="Scatterplot.html" width="1200" height="600"></iframe>
            

              </div>
            </div>
          </div>
      
        <!-- Include necessary scripts for chart generation -->
        <script src="https://d3js.org/d3.v7.min.js"></script>
        <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
        <script src="static/Javascript/chart-library.js"></script>
        <script src="Static/Javascript/piechart.js"></script>
      
      </body>
      </html>


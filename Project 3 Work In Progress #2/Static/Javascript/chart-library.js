// Function to create a pie chart using Plotly
function createPieChart(containerId, labels, values) {
    const data = [{
        values: values,
        labels: labels,
        type: 'pie'
    }];

    const layout = {
        height: 400,
        width: 500
    };

    Plotly.newPlot(containerId, data, layout);
}
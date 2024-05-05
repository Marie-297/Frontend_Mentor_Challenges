//fetch data from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        drawBarChart(data);
    })
    

// Function to draw the bar chart
function drawBarChart(data) {
    const chartContainer = document.querySelector('.chart');

    // Clear existing content in the chart container
    chartContainer.innerHTML = '';

    // Set the maximum amount to calculate the height of bars
    const maxAmount = Math.max(...data.map(item => item.amount));

    // Loop through the data array and create a bar for each item
    data.forEach(item => {
        let chartItem = document.createElement('div');
        let totalAmount = 0;
        for (let i = 0; i < data.length; i++) {
          totalAmount = totalAmount + data[i].amount;
        }
        // calculate the height of the chartItem based on the item amount
        chartItem.style.height = ((item.amount / totalAmount) * 400).toFixed(2) + '%';
        console.log(chartItem.style.height);
        chartItem.classList.add('chart-item');
        
        chartContainer.appendChild(chartItem);
    });
};


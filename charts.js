const recommendations = document.getElementById('recommendations');
const revenue = document.getElementById('revenue');
const orders = document.getElementById('orders');

new Chart(recommendations, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: 'Recommendations',
      data: [2, 3, 1, 0, 2, 3, 2, 1, 5, 8, 4, 6],
      borderWidth: 1
    }]
  },
  options: {
    backgroundColor: '#04AA6D',
    borderColor: '#04AA6D',
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(revenue, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Revenue',
        data: [200.50, 300.00, 275.32, 232.40, 200.00, 320.00, 182.55, 480.22, 300.22, 288.32, 405.23, 232.23],
        borderWidth: 1
      }]
    },
    options: {
     backgroundColor: '#04AA6D',
     borderColor: '#04AA6D',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  new Chart(orders, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Orders',
        data: [2, 3, 1, 0, 2, 3, 2, 1, 5, 8, 4, 6],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

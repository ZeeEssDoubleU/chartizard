//// Main traffic chart
// Change class of buttons above main traffic chart when clicked

//// Declare variables
let mainTraffic = document.querySelector('#traffic-chart').getContext('2d');

// Declare variables for traffic chart buttons
let hourlyButton = $('#hourly-traffic-button');
let dailyButton = $('#daily-traffic-button');
let weeklyButton = $('#weekly-traffic-button');
let monthlyButton = $('#monthly-traffic-button');

// Declare array including all traffic chart buttons
let buttonArray = [hourlyButton, dailyButton, weeklyButton, monthlyButton];


//// Main traffic chart data
// Hourly traffic data (main traffic chart)
let hourlyTrafficData = {
    type: 'line',
    data: {
        labels: ['12:00am-2:59am', '3:00am-5:59am', '6:00am-8:59am', '9:00am-11:59am', '12:00pm-2:59pm', '3:00pm-5:59pm', '6:00pm-8:59pm', '9:00pm-11:59pm'],
        datasets: [{
            data: [20, 15, 25, 50, 100, 200, 150, 150],
            backgroundColor: 'rgba(115, 120, 186, .2)',
            borderColor: 'rgba(115, 120, 186, .5)',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            pointBorderColor: 'rgba(115, 120, 186, 1)',
            pointRadius: 6,
            lineTension: 0,
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 300,
                    stepSize: 100,
                    padding: 20,
                },
                gridLines: {
                    drawTicks: false
                }
            }],
        }
    }
};

// Daily traffic data (main traffic chart)
let dailyTrafficData = {
    type: 'line',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            data: [300, 150, 200, 200, 250, 150, 350],
            backgroundColor: 'rgba(115, 120, 186, .2)',
            borderColor: 'rgba(115, 120, 186, .5)',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            pointBorderColor: 'rgba(115, 120, 186, 1)',
            pointRadius: 6,
            lineTension: 0,
            }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 400,
                    stepSize: 100,
                    padding: 20,
                },
                gridLines: {
                    drawTicks: false
                }
            }],
        }
    }
};

// Weekly traffic data (main traffic chart)
let weeklyTrafficData = {
    type: 'scatter',
    data: {
        datasets: [{
            data: [
                {
                    x: 0,
                    y: 0
                }, //16
                {
                    x: 7,
                    y: 500
                }, //23
                {
                    x: 14,
                    y: 1000
                }, //30
                {
                    x: 17,
                    y: 750
                }, //3
                {
                    x: 24,
                    y: 1250
                }, //9
                {
                    x: 31,
                    y: 1750
                }, //16
                {
                    x: 38,
                    y: 1250
                }, //23
                {
                    x: 42,
                    y: 1500
                }, //27
                {
                    x: 49,
                    y: 1000
                }, //4
                {
                    x: 56,
                    y: 1500
                }, //11
                {
                    x: 63,
                    y: 2000
                }, //18
                {
                    x: 70,
                    y: 1500
                }, //25
                {
                    x: 77,
                    y: 2000
                }], //32
            backgroundColor: 'rgba(115, 120, 186, .2)',
            borderColor: 'rgba(115, 120, 186, .5)',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            pointBorderColor: 'rgba(115, 120, 186, 1)',
            pointRadius: 6,
            lineTension: 0,
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    padding: 20,
                    min: 0,
                    stepSize: 7,
                    callback: function (value) {
                        if (value >= 0 && value < 7) {
                            return null;
                        } else if (value >= 7 && value < 14) {
                            return '16-22';
                        } else if (value >= 14 && value < 21) {
                            return '23-29';
                        } else if (value >= 21 && value < 28) {
                            return '30-5';
                        } else if (value >= 28 && value < 35) {
                            return '6-12';
                        } else if (value >= 35 && value < 42) {
                            return '13-19';
                        } else if (value >= 42 && value < 49) {
                            return '20-26';
                        } else if (value >= 49 && value < 56) {
                            return '27-3';
                        } else if (value >= 56 && value < 63) {
                            return '4-10';
                        } else if (value >= 63 && value < 70) {
                            return '11-17';
                        } else if (value >= 70 && value < 77) {
                            return '18-24';
                        } else if (value >= 77) {
                            return '25-31';
                        }
                    },
                    gridLines: {
                        drawTicks: false,
                    }
                }
                    }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 2500,
                    stepSize: 500,
                    padding: 20,
                },
                gridLines: {
                    drawTicks: false
                }
            }],
        }
    }
};


// Monthly traffic data (main traffic chart)
let monthlyTrafficData = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            data: [4000, 4500, 5000, 4000, 6000, 5500, 4500, 8000, 9000, 7500, 6000, 6500],
            backgroundColor: 'rgba(115, 120, 186, .2)',
            borderColor: 'rgba(115, 120, 186, .5)',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            pointBorderColor: 'rgba(115, 120, 186, 1)',
            pointRadius: 6,
            lineTension: 0,
            }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 10000,
                    stepSize: 1000,
                    padding: 20,
                },
                gridLines: {
                    drawTicks: false
                }
            }],
        }
    }
};


//// Show weekly traffic chart by default (on page load)
$(document).ready(function () {
    let mainTrafficChart = new Chart(mainTraffic, weeklyTrafficData);
});


//// When traffic chart buttons are clicked...
// When hourly button is clicked
hourlyButton.click(function () {
    // Remove .active class from all buttons
    for (i = 0; i < buttonArray.length; i++) {
        buttonArray[i].removeClass('active');
    }
    // Add .active class to clicked button
    {
        hourlyButton.addClass('active');
    }

    let mainTrafficChart = new Chart(mainTraffic, hourlyTrafficData);
});

// When daily button is clicked
dailyButton.click(function () {
    // Remove .active class from all buttons
    for (i = 0; i < buttonArray.length; i++) {
        buttonArray[i].removeClass('active');
    }
    // Add .active class to clicked button
    {
        dailyButton.addClass('active');
    }

    let mainTrafficChart = new Chart(mainTraffic, dailyTrafficData);
});

// When weekly button is clicked
weeklyButton.click(function () {
    // Remove .active class from all buttons
    for (i = 0; i < buttonArray.length; i++) {
        buttonArray[i].removeClass('active');
    }
    // Add .active class to clicked button
    {
        weeklyButton.addClass('active');
    }

    let mainTrafficChart = new Chart(mainTraffic, weeklyTrafficData);
});

// When monthly button is clicked
monthlyButton.click(function () {
    // Remove .active class from all buttons
    for (i = 0; i < buttonArray.length; i++) {
        buttonArray[i].removeClass('active');
    }
    // Add .active class to clicked button
    {
        monthlyButton.addClass('active');
    }

    let mainTrafficChart = new Chart(mainTraffic, monthlyTrafficData);
});


//// Daily traffic chart
let dailyTraffic = document.querySelector('#daily-traffic-chart');

// Daily traffic data (daily traffic chart)
let dailyTrafficChartData = {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'Th', 'F', 'Sa'],
        datasets: [{
            data: [300, 150, 200, 200, 250, 150, 350],
            backgroundColor: 'rgba(115, 120, 186, 1)',
            borderColor: 'rgba(115, 120, 186, .5)',
            borderWidth: 1,
            }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 400,
                    stepSize: 100,
                    padding: 20,
                },
                gridLines: {
                    drawTicks: false
                }
            }],
        }
    }
};

// Populate daily traffic chart with data
let dailyTrafficChart = new Chart(dailyTraffic, dailyTrafficChartData);


//// Mobile users chart
let mobileUsers = document.querySelector('#mobile-users-chart');

// Mobile users data
let mobileUsersChart = new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
        labels: [
            'Phones',
            'Tablets',
            'Desktop'
        ],
        datasets: [{
            data: [70, 80, 260],
            backgroundColor: ['#80b0bd',
                              '#90c694',
                              '#7378ba']
        }]
    },
    options: {
        legend: {
            position: 'right',
            labels: {
//                padding: 18,
                boxWidth: 26,
                fontSize: 14,
            }
        }
    },
});

// Populate mobile users chart with data

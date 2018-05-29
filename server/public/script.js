/*
* We put the code for fetching tmeperature in its own function
*/
	const fetchTemperature = () => {
		  fetch('/temperature')
		    .then(results => {
			          return results.text()
			        })
		    .then(text => {
			          const temperatureDisplay = document.getElementById('temperature-display')
			          temperatureDisplay.innerHTML = text
			        })
	}

/*
 * Make a similar function to fetch humidity
 * */
const fetchHumidity = () => {
	  fetch('/humidity')
	    .then(results => {
		          return results.text()
		        })
	    .then(text => {
		          const temperatureDisplay = document.getElementById('humidity-display')
		          temperatureDisplay.innerHTML = text
		        })
}

/*
 * Call the above defined functions at regular intervals
 * */
setInterval(() => {
	  fetchTemperature()
	  fetchHumidity()
}, 2000)

/**
*Get the context of the temperature canvas element
**/
const temperatureCanvasCtx = document.getElementById('temperature-chart').getContext('2d');

/**
*Create a new chart on the context we just instatiated
**/

const temperatureChart = new Chart(temperatureCanvasCtx, {
	type: 'line',
	data: {
		labels: ['10:30', '10:31', '10:32', '10:33'],
		datasets: [{
			data:[12, 19, 23, 17],
		backgroundColor: 'rgba(255, 205, 210, 0.5)'
	}]
	},
	options: {
		legend: {
			display: false
		},
		responsive: true,
		maintainAspectRatio: false
	}
})

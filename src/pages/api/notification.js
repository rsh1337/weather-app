import Push from 'push.js';

function checkWeather() {
	const precipitation = 71;
	if (precipitation > 70) {
		// Create a notification using Push.js
		Push.create('High Precipitation Warning', {
			body: 'There is a high chance of precipitation in the next hour.',
			icon: '/path/to/icon.png'
		});
	}
}

setInterval(checkWeather, 60 * 60 * 1000); // Run every hour (in milliseconds)

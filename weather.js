class Weather {
	constructor(city, state) {
		this.apiKey = 'dd4fce1c5b134c53b229c662fa5fd210';
		this.city = city;
		this.state = state;
	}

	/*39277fe4b686458092f9fcaf1b7daa1d
https://api.weatherbit.io/v2.0/current?&city=Boucherville&key=dd4fce1c5b134c53b229c662fa5fd210&include=minutely

    https://api.weatherbit.io/v2.0/current?&city=Bouchervill&key=39277fe4b686458092f9fcaf1b7daa1d&include=minutely


https://api.weatherbit.io/v2.0/current?&city=Bouchervill&key=39277fe4b686458092f9fcaf1b7daa1d&include=minutely
*/
	// Fetch weather from API
	async getWeather() {
		const response = await fetch(
			`https://api.weatherbit.io/v2.0/current?city=${this.city}&key=${this.apiKey}&include=minutely
            `
			/*`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`/*/
		);

		const responseData = await response.json();
		return responseData.data;
	}

	// Change weather location
	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}
}

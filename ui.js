class UI {
	constructor() {
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.details = document.getElementById('w-details');
		this.icon = document.getElementById('w-icon');
		this.humidity = document.getElementById('w-humidity');
		this.feelsLike = document.getElementById('w-feels-like');
		this.dewpoint = document.getElementById('w-dewpoint');
		this.wind = document.getElementById('w-wind');
	}

	paint(weather) {
		const icon = `https://www.weatherbit.io/static/img/icons/
			${weather[0].weather.icon}.png`;
		this.location.textContent = weather[0].city_name;
		this.desc.textContent = weather[0].weather.description;
		this.string.textContent = weather[0].temp + ' 0c';
		this.icon.setAttribute('src', icon);
		this.humidity.textContent = `Relative Humidity: ${weather[0].rh}`;
		this.feelsLike.textContent = `Feels Like: ${weather[0].app_temp} 0c`;

		this.dewpoint.textContent = `DewPoint: ${weather[0].dewpt}`;
		this.wind.textContent = `Wind: ${weather[0].wind_cdir_full}`;
	}
}

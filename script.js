function searchWeather() {
    const apiKey = '5c702073e2b1be5c0e7ffb6630e1fb0b';
    const city = document.getElementById('city').value;

    if (!city) {
        alert("Please Enter a Correct City Name");
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data.please try again');
        });

    

}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('Weather-icon');

    weatherInfoDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>` ;

    } else {

        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openwathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML = `<p>${temperature}C</p>`;

            const weatherHtml = `
            <p>${cityName}</p>
            <p>${description}</p>`;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
                
        
    }
}

function showImage() {
    
    const weatherIcon = document.getElementById('Weather-icon');
    weatherIcon.style.display='block';
}
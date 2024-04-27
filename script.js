
function searchWeather() {
    const apiKey = '5c702073e2b1be5c0e7ffb6630e1fb0b';
    const city = document.getElementById('city').value;

    if (!city) {
        alert("Please Enter a Correct City Name");
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    fetch(currentWeatherUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            displayWeather(data);
            
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
        });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('Weather-info');
    const weatherIcon = document.getElementById('Weather-icon');
    const humidityElement = document.getElementById('Humidity-level');

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>` ;
    } else {
        const cityName = data.name;
        const temperature = Math.round(Number(data.main.temp) - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const humidityLevel = data.main.humidity;
        //const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        console.log(humidityLevel);

        const temperatureHTML = `<p>${temperature}℃</p>`;

        const weatherHtml = `
            <p>${cityName}</p>
            <p>${description}</p>`;

        const humidityHTML = `<p>${humidityLevel}%</p>`;
    
        const weatherIcons ={
            '01d': 'images/Weather-icon01.png'
        };
    
        document.getElementById('WeatherIcon').src = `D:\OneDrive\Desktop\Weather_App\images\${weatherIcons[iconCode]}`;
       

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        humidityElement.innerHTML = humidityHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();                
    }
}

function showImage() {

    

    const weatherIcon = document.getElementById('Weather-icon');
    WeatherIcon.style.display='block';
}
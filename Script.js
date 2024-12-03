async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            alert(data.message); // Show the error message returned by the API
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
    }
}

// Event listener for the button to trigger the weather fetch
document.querySelector('button').addEventListener('click', getWeather);

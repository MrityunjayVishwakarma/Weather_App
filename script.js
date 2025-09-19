const apiKey = "330558553dbd46f852c8c8654e3d615e"; 

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();

        const windSpeedMS = data.wind.speed; 
        const windSpeedKMH = (windSpeedMS * 3.6).toFixed(1); 


        document.getElementById("result").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>🌡 Temp: ${data.main.temp}&deg;C</p>
            <p>☁️ Weather: ${data.weather[0].description}</p>
            <p>💨 Wind: ${windSpeedKMH} km/h</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}

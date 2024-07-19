document
  .getElementById("getWeatherBtn")
  .addEventListener("click", async function () {
    const city = document.getElementById("cityInput").value;
    const apiKey = "e0bb0abed4e951324d3a2d1c5f79495a";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      document.getElementById("city").textContent = `City: ${data.name}`;
      document.getElementById(
        "temp"
      ).textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById(
        "weather"
      ).textContent = `Weather: ${data.weather[0].description}`;
      document.getElementById(
        "humidity"
      ).textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById(
        "windSpeed"
      ).textContent = `Wind Speed: ${data.wind.speed} m/s`;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  });

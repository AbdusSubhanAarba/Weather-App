const apiKey = "5371c555e550b760a53305ae623372dd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "https://raw.githubusercontent.com/AbdusSubhanAarba/Weather-App/main/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "https://raw.githubusercontent.com/AbdusSubhanAarba/Weather-App/main/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "https://raw.githubusercontent.com/AbdusSubhanAarba/Weather-App/main/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "https://raw.githubusercontent.com/AbdusSubhanAarba/Weather-App/main/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "https://raw.githubusercontent.com/AbdusSubhanAarba/Weather-App/main/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "https://raw.githubusercontent.com/AbdusSubhanAarba/Weather-App/main/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}


searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});


searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});

checkWeather();


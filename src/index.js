function refreshWeather(response) {
  let tempertureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  tempertureElement.innerHTML = Math.round(temperature);
  let cityHeaderInput = document.querySelector("#city-header");
  cityHeaderInput.innerHTML = response.data.city;
  let conditionsElement = document.querySelector("#conditions");
  conditionsElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;

  let date = new Date(response.data.time * 1000);

  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = formatDate(date);
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;

  console.log(response);
}

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = days[date.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function submitCity(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");
  searchCity(searchFormInput.value);
}
function searchCity(city) {
  let apiKey = "f3c5613898a1043cbte4a77d8c1bcfo0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

let searchFormElement = document.querySelector("#seach-form");
searchFormElement = addEventListener("submit", submitCity);

searchCity("London");

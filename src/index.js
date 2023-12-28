function submitCity(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");
  let cityHeaderInput = document.querySelector("#city-header");
  cityHeaderInput.innerHTML = searchFormInput.value;
}

let searchFormElement = document.querySelector("#seach-form");
searchFormElement = addEventListener("submit", submitCity);

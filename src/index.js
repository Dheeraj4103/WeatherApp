import "./index.css";
import { FillMain, FillOther } from "./DomStuff";

// Default location
let loc = "Pune";
// weather api url
let url = "http://api.openweathermap.org/data/2.5/weather?q=";
// API key
let api_id = "&APPID=5c2262fab86bee8d1567496a2aee2eb2&units=metric";

// Input area
const search = document.getElementById("search");
// Submit button
const submit = document.getElementById("submit");

// onclick read the input text and call GetWeather()
submit.addEventListener("click", (e) => {
  console.log("sumitted");
  try {
    GetWeather(search.value, url, api_id);
  } catch (error) {
    alert(error);
    // if there is an error call GetWeather with default location
    GetWeather(loc, url, api_id);
  }
  e.preventDefault();
});

// At start call GetWeather with default location
GetWeather(loc, url, api_id);

async function GetWeather(loc, url, api_id) {
  // create a path to fetch, using url, location and api_id
  const path = url + loc + api_id;
  // fetch the response
  const response = await fetch(path);
  // convert into json file to object
  const data = await response.json();
  console.log(data);
  // if there is an error throw error
  if (data.cod == 404) {
    throw new Error("City Not Found");
  }
  // first fill main weather information
  FillMain(data);
  // then fill other weather information
  FillOther(data);
}

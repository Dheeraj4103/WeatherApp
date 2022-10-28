// url to get icon of required weather condition
let icon_api = "http://openweathermap.org/img/wn/";

// function from where we will get required DOMs
function Doms() {
  // store all required DOMs in variables
  const cityname = document.getElementById("city");
  const iconimg = document.getElementById("icon");
  const desc = document.getElementById("desc");
  const dateinfo = document.getElementById("date-time");
  const maindeg = document.getElementById("main-deg");
  const mindeg = document.getElementById("min-deg");
  const maxdeg = document.getElementById("max-deg");
  const windinfo = document.getElementById("wind-info");

  // return all variables in an object
  return {
    cityname,
    iconimg,
    desc,
    dateinfo,
    maindeg,
    mindeg,
    maxdeg,
    windinfo,
  };
}

// function to fill main weather information
function FillMain(data) {
  // main weather information
  const city = data.name;
  const descWeather = data.weather[0].description;
  const icon = data.weather[0].icon;

  // get all required dom
  const doms = Doms();
  // write city name
  doms.cityname.innerHTML = city;
  // load required weather icon
  doms.iconimg.src = icon_api + icon + "@2x" + ".png";
  // write descriptive weather info
  doms.desc.innerHTML = descWeather;
  // get date
  const date = new Date();
  // calulate date and time
  const day = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  // display date and time
  doms.dateinfo.innerHTML = day;
}

// function to fill other weather information
function FillOther(data) {
  // get all required DOMs
  const doms = Doms();
  // display main temp
  doms.maindeg.innerHTML = data.main.temp + "&#8451;";
  // display min temp
  doms.mindeg.innerHTML = data.main.temp_min + "&#8451;";
  // display max temp
  doms.maxdeg.innerHTML = data.main.temp_max + "&#8451;";
  // display wind info
  doms.windinfo.innerHTML = `Speed:- ${data.wind.speed}<br> Degree:- ${data.wind.deg}`;
}

export { FillMain, FillOther };

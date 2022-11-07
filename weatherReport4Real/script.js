let weatherApi =
  "https://api.openweathermap.org/data/2.5/forecast?units=metric&limit=5&appid=f358b55446e4c9ba1e5fc83308d87bbd";

let latLonApi =
  "http://api.openweathermap.org/geo/1.0/direct?appid=f358b55446e4c9ba1e5fc83308d87bbd";
let city = prompt("Enter a City");
city = city.toLowerCase();

let state = prompt("Enter a State");
state = state.toLowerCase();

let countryCode = prompt("Enter a 2 Letter Country Code");
countryCode = countryCode.toLowerCase();

//q={city name},{state code},{country code}&
axios
  .get(latLonApi + "&q=" + city + "," + state + "," + countryCode)
  .then(getLatLon);

function getLatLon(response) {
  console.log(response);
  axios
    .get(
      weatherApi +
        "&lat=" +
        response.data[0].lat +
        "&lon=" +
        response.data[0].lon
    )
    .then(buildWeatherHTML);
}
document.getElementById("dev").innerHTML = "Weather in " + city +" for the Week";


function buildWeatherHTML(response) {
  console.log(response);
  var dayOne= document.getElementById('day-one');

  var date = new Date(response.data.list[0].dt_txt);
  var dayOfTheWeekString = date.toLocaleDateString("en-us", { weekday: 'long' });
  var minTemp = response.data.list[0].main.temp_min;
  var maxTemp = response.data.list[0].main.temp_max;

  dayOne.innerHTML= dayOfTheWeekString + "</br>" + minTemp + "/" + maxTemp + "</br>";

  var dayTwo = document.getElementById('day-two');

  date = new Date(response.data.list[7].dt_txt);
  dayOfTheWeekString = date.toLocaleDateString("en-us", { weekday: 'long' });
  minTemp = response.data.list[7].main.temp_min;
  maxTemp = response.data.list[7].main.temp_max;

  dayTwo.innerHTML= dayOfTheWeekString + "</br>" + minTemp + "/" + maxTemp + "</br>";

  var dayThree = document.getElementById('day-three');

  date = new Date(response.data.list[15].dt_txt);
  dayOfTheWeekString = date.toLocaleDateString("en-us", { weekday: 'long' });
  minTemp = response.data.list[15].main.temp_min;
  maxTemp = response.data.list[15].main.temp_max;

  dayThree.innerHTML= dayOfTheWeekString + "</br>" + minTemp + "/" + maxTemp + "</br>";

  var dayFour = document.getElementById('day-four');

  date = new Date(response.data.list[23].dt_txt);
  dayOfTheWeekString = date.toLocaleDateString("en-us", { weekday: 'long' });
  minTemp = response.data.list[23].main.temp_min;
  maxTemp = response.data.list[23].main.temp_max;

  dayFour.innerHTML= dayOfTheWeekString + "</br>" + minTemp + "/" + maxTemp + "</br>";

  var dayFive = document.getElementById('day-five');

  date = new Date(response.data.list[31].dt_txt);
  dayOfTheWeekString = date.toLocaleDateString("en-us", { weekday: 'long' });
  minTemp = response.data.list[31].main.temp_min;
  maxTemp = response.data.list[31].main.temp_max;

  dayFive.innerHTML= dayOfTheWeekString + "</br>" + minTemp + "/" + maxTemp + "</br>";
}
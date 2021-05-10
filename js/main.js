// I will capture the api from here: https://home.openweathermap.org/
// I'm going to capture the weather icons from here: https://www.weathertomorrow.net/icon/03d.svg

/*  Code by @pedrognrd  */  

var currentOut = '', currentJsonn = ''; 
var lat, lon;
var thermunit = 'C';
var currentTempInCelsius;
var api = " ";
function inIframe () {try {return window.self !== window.top;} catch (e) {return true;}}

function getWeather(api, lat, lon) {
  var urlString = api;
  console.log(urlString);
  var temperature = " ", weather = " ", icon = " ", urlIcon = "https://www.weathertomorrow.net/icon/", country = " ";

  $.ajax({
    url: urlString, 
    success: function (result) {
      result = JSON.stringify(result);
      if (typeof result === 'string') {
        result = JSON.parse(result); 
        
        temperature = JSON.stringify(result.main["temp"] - 273.15);
        temperature = Math.round(temperature * 100) / 100;
        country = JSON.stringify(result.sys["country"]);
        country = country.replace(/['"]+/g, '');
        weather = JSON.stringify(result.weather[0].main);
        weather = weather.replace(/['"]+/g, '');

        icon = JSON.stringify(result.weather[0]["icon"]);
        console.log(icon);
        icon = icon.replace(/['"]+/g, '');
        console.log(icon);
        /*icon = "<img src =" + urlIcon + icon + ".svg width='180px'>";
        icon = "<span></span>";*/
        //icon.addClass("icon-01d");
        //icon.addClass("icon-10d");

        $("#city").text(result.name + ", ");
        $("#country").text(country);
        $("#temperature").text(temperature + String.fromCharCode(176) + " "); 
        $("#thermunit").text(thermunit);
        $("#weather").text(weather + " "); 
        //$("#icon-rise").html(icon); 
      }

      $("#thermunit").click(function () {
        var currentTempUnit = $("#thermunit").text();
        var newTempUnit = currentTempUnit == "C" ? "F" : "C";

        var tempInfahrenheit = temperature * 1.8 + 32;
        tempInfahrenheit = Math.round(tempInfahrenheit * 100) / 100;

        $("#thermunit").text(newTempUnit);

        switch(newTempUnit) {
          case "F":
            $("#temperature").text(tempInfahrenheit + String.fromCharCode(176) + " "); 
            break;
          default:
            $("#temperature").text(temperature + String.fromCharCode(176) + " "); 
        }

      });

      switch(result.weather[0]["icon"]) {
        case "01d":
          $("#icon-rise").addClass("iconrise");
          $("#icon").addClass("icon-" + icon);
          $("#weathericon").addClass("wi wi-day-sunny");
          break;
        case "02d":
          $("#icon-rise").addClass("iconrise");
          $("#icon").addClass("icon-" + icon);
          $("#weathericon").addClass("wi wi-day-sunny-overcast");
          break;
        case "03d":
          $("#icon-rise").addClass("iconrise");
          $("#icon").addClass("icon-" + icon);
          $("#weathericon").addClass("wi wi-day-cloudy");
          break;
        case "04d":
          $("#icon-rise").addClass("iconrise");
          $("#icon").addClass("icon-" + icon);
          $("#weathericon").addClass("wi wi-cloudy");
          break; 
        case "09d":
          $("#icon-rise").addClass("iconrise");
          $("#icon").addClass("icon-" + icon);
          $("#weathericon").addClass("wi wi-night-rain-mix");
          break;
        case "10d":
          $("#icon-rise").addClass("iconrise");
          $("#icon").addClass("icon-" + icon);
          $("#weathericon").addClass("wi wi-night-thunderstorm");
          break; 
        case "13d":
          $("#icon-rise").addClass("iconrise");
          $("#icon").addClass("icon-" + icon);
          $("#weathericon").addClass("wi wi-day-snow");
          break; 
        default:
          $("#icon-rise").addClass("iconrise");
          $("#icon").addClass("icon-" + icon);
          $("#weathericon").addClass("wi wi-sunny");
          break;
      }
    }
  });
}


$(document).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=7866384c69d6ae4ebe5fdd153b6747c5";
      JSON.stringify(api);
      getWeather(api);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
});
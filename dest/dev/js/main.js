$(document).ready(function(){
  $("#submitCity").click(function(){
    return getWeather();
  });
});

function getWeather(){
  var userCity = $("#userCity").val();

  if(userCity != ""){
    console.log("city:" + userCity);
    
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + userCity + '&units=metric&APPID=2f4e3d7755b0080290c3411f49f56eed',
        type: 'GET',
        dataType: 'json',
        success: function(data){

            var getCity = showCity(data),
                getTemp = showTemp(data),
                getHumidity = showHumidity(data),
                getWindSpeed = showWindSpeed(data),
                getDescription = showDescription(data),
                getIcon = weatherIcon(data);
            
            $("#userCityName").html(getCity);
            $("#userCityName").append(getTemp);
            $("#userCityName").append(getHumidity);
            $("#userCityName").append(getWindSpeed);
            $("#userCityName").append(getDescription);
            $("#userCityName").append(getIcon);
        }
    });
    
    
  }else{
    console.log("city field cannot be empty");
  }
}


function showCity(data){
  var city = data.name,
      country = data.sys.country;
  return "<p>" + city + ", " + country + "</p>";
}

function showTemp(data){
  var temp = data.main.temp;
  return "<p><i class='wi wi-thermometer'></i> " + temp + " &#8451;</p>";
}

function showHumidity(data){
  var humidity = data.main.humidity;
  return "<p><i class='wi wi-humidity'></i> " + humidity + " &percnt;</p>";
}

function showWindSpeed(data){
  var windSpeed = data.wind.speed;
  return "<p><i class='wi wi-strong-wind'></i> " + windSpeed + " m/s</p>";
}

function showDescription(data){
  var description = data.weather[0].description;
  return "<p><i class='wi wi-storm-warning'></i> " + description + " || " + data.weather[0].id + "</p>";
}

function weatherIcon(data){
  var icon,
      weatherId = data.weather[0].id,
      now = new Date(),
      unixtime = Date.parse(now)/1000;

      if (data.sys.sunrise < unixtime && data.sys.sunset > unixtime) {
          console.log("dzieeeen");
          console.log(weatherId);
            switch (weatherId){
                case 800:
                    icon = "day-sunny";
                break;
                case 801:
                    icon = "day-cloudy";
                break;
                case 802:
                    icon = "cloud";
                break;
                case 803: case 804:
                    icon = "cloudy";
                break;
                case 300: case 301: case 302: case 310: case 311: case 312: case 313: case 31: case 321: case 520:
                    icon = "day-showers";
                break;
                case 500: case 501: case 502: case 502: case 504:
                    icon = "rain";
                break;
                case 200: case 201: case 202: case 210: case 211: case 212: case 221: case 230: case 231: case 232:
                    icon = "day-storm-showers";
                break;
                case 511: case 600: case 601: case 602: case 611: case 612: case 615: case 616: case 620: case 621: case 622:
                    icon = "snow";
                break;
                case 701: case 711: case 721: case 731: case 741: case 751: case 761: case 762: case 771: case 781:
                    icon = "fog";
                break;
                default:
                console.log("kiedy wreszcie będzie weekend?!");
          }
      } else {
          console.log("nooooc");
          console.log(weatherId);

          switch (weatherId){
              case 800:
                    icon = "night-clear";
                break;
                case 801:
                    icon = "night-alt-cloudy";
                break;
                case 802:
                    icon = "cloud";
                break;
                case 803: case 804:
                    icon = "cloudy";
                break;
                case 300: case 301: case 302: case 310: case 311: case 312: case 313: case 31: case 321: case 520:
                    icon = "night-alt-showers";
                break;
                case 500: case 501: case 502: case 502: case 504:
                    icon = "rain";
                break;
                case 200: case 201: case 202: case 210: case 211: case 212: case 221: case 230: case 231: case 232:
                    icon = "night-alt-storm-showers";
                break;
                case 511: case 600: case 601: case 602: case 611: case 612: case 615: case 616: case 620: case 621: case 622:
                    icon = "snow";
                break;
                case 701: case 711: case 721: case 731: case 741: case 751: case 761: case 762: case 771: case 781:
                    icon = "fog";
                break;
              default:
              console.log("kiedy wreszcie będzie weekend?!");
          }
      }
              return("<p><i class='wi wi-" + icon + "'></i></p>");
}
//# sourceMappingURL=main.js.map

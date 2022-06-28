//adding express
const express = require("express");
const app = express();

//adding https
const https = require("https");

//adding body-Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));


app.get("/", function(req,res){

  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  const city = req.body.cityName;
  const appKey = "a571b38d518a85b624b171bd5209fc05";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+appKey+"&units=metric";
  https.get(url, function(response){
    console.log(response.statusCode);
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temparature = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const weatherImage = weatherData.weather[0].icon;
      console.log(temparature);
      console.log(weatherDescription);

      res.write("<p>Weather here is " + weatherDescription + "</p>");
      res.write("<h1>The temparature in " + city + " is " + temparature + " degree Celsius</h1>");
      res.write("<img src='http://openweathermap.org/img/wn/"+weatherImage+"@2x.png'>");
      res.send();
    });
  });
});

app.listen(3000, function(){
  console.log("Server is running");
});

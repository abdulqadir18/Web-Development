//requiring npm packages
const express = require("express");
const bodyParser = require("body-parser");

//express
const app = express();

//body parser
app.use(bodyParser.urlencoded({extended:true}));

//ejs
app.set("view engine", "ejs");


//GET
app.get("/", function(req,res){
  var today = new Date();
  var currentDay = today.getDay();
  var day="";
  switch(currentDay)
  {
    case 0 :
      day = "Sunday";
      break;
    case 1 :
      day = "Monday";
      break;
    case 2 :
      day = "Tuesday";
      break;
    case 3 :
      day = "Wednesday";
      v
    case 4 :
      day = "Thursday";
      break;
    case 5 :
      day = "Friday";
      break;
    case 6 :
      day = "Saturday";
      break;
    default :
      console.log("Error : due to current day ",currentDay);
  }
  res.render("list",{
    kindOfDay : day
  });
});


//listen at port 3000
app.listen(3000,function(){
  console.log("Server is running.");
});

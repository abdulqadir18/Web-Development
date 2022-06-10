//-------Adding Express and Body Parser
const express = require("express");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extended : true}));

//-------Calculator
//GET
app.get("/", function(req,res)
{
  res.sendFile(__dirname + "/index.html")
});

//POST
app.post("/", function(req,res)
{
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var sum = num1+num2;
  res.send("Thanks for Posting. Sum is " + sum);
});

//-------BMI Calculator
//GET
app.get("/bmi", function(req,res)
{
  res.sendFile(__dirname + "/bmi.html")
});

//POST
app.post("/bmi", function(req,res)
{
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var bmi = height/Math.pow(weight,2);
  res.send("Thanks for Posting. BMI is " + bmi);
});


//-------Local Host
app.listen(3000, function(){
  console.log("Server Started");
});

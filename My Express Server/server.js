//------Including express
const express = require("express");
const app = express();

//------Get
//root
app.get("/",function(req,res)
{
  console.log(req);
  res.send("<h1>Hello Server, Changed</h1>");
});

//contact route
app.get("/contact",function(req,res){
  res.send("Contact me at abdulqadir18");
});

//about route
app.get("/about",function(req,res){
  res.send("My name is Abdul Qadir Boxwala");
});

//copright route
app.get("/copy",function(req,res){
  res.send("My name is Abdul Qadir Boxwala");
});

//------Listen to localhost:3000
app.listen(3000, function(req,res){
  console.log("Server started");
});

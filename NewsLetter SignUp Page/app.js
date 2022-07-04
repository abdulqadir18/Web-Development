const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
//express
const app = express();

//body-parser
app.use(bodyParser.urlencoded({extended : true}));


//static folders
app.use(express.static("public"));

//GET
app.get("/", function(req,res)
{
  res.sendFile(__dirname + "/signup.html");
});

//POST
app.post("/", function(req,res)
{
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  console.log(firstName,lastName,email);

  //data to be send to mailchimp server
  const data = {
    members:[
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }

  //converting js data into json
  const jsonData = JSON.stringify(data);

  //to send to mailchimp server using https
  //url
  const url="https://us12.api.mailchimp.com/3.0/lists/40a755a629";
  //options
  const options={
    method:"POST",
    auth:"abdulqadir18:789b742a3ab2b375e2c0bd8c9706ce58-us12"
  }

  const request=https.request(url,options,function(response)
  {
    if(response.statusCode===200){
      res.sendFile(__dirname+"/success.html");
    }else{
      res.sendFile(__dirname+"/failure.html");
    }
    response.on("data",function(data)
    {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});

//redirect
app.post("/failure", function(req,res){
  res.redirect("/");
});

//listen to Server
app.listen(3000,function(){
  console.log("Server is running");
});


//API keys
//789b742a3ab2b375e2c0bd8c9706ce58-us12

//List ID
//40a755a629

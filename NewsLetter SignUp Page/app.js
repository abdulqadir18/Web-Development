const express = require("express");
const bodyParser = require("body-parser");

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

  const jsonData = JSON.stringify(data);
  console.log(firstName,lastName,email);
});

//listen to Server
app.listen(3000,function(){
  console.log("Server is running");
});


//API keys
//789b742a3ab2b375e2c0bd8c9706ce58-us12

//List ID
//40a755a629

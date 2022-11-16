const express = require("express");
const bodyParser = require('body-parser');

// creating our app constant using express 
const app = express();

app.get("/", function(req, res){
  res.send("Hello")
})

app.listen(3000, function(){
  console.log("App listening on port 3000")
})



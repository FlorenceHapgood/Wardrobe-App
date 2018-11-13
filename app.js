var express = require("express");
var app = express();
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.

var port = process.env.PORT || 8080;

app.get('/',function(req,res){
  res.send('Hello');
  res.sendFile('views/index.html');
  //It will find and locate index.html from View or Scripts
});


app.listen(port, function(){
  console.log("Running at Port" + port);
});

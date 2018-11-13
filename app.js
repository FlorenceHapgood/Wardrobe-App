var express = require("express"),
app = express();
app.get("theroutyouwant", function(req, res){
// if you need to send a html file
res.sendfile("index.html");
//if you need to send html tag
res.type("text/html");
res.send("<p>hello world!</p>");
};
app.listen(3000);
console.log('server is running on port 3000);

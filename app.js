var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku


// make express look in the public directory for assets (css/js/img)


// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.sendfile(index.html);

});

app.listen(8080, function() {
    console.log('Our app is running on http://localhost:8080');
});

var express = require("express");
var favicon = require('express-favicon');

var app = express();

// ***** serve static content ****
app.use("/static", express.static("static"));
app.use(favicon(__dirname + '/static/favicon.ico'));

// **** route ****
app.get("/", function(request, response){
    response.end("Hello world from express (default route) !!!");
});

// **** route ****
app.get("/john", function(request, response){
    response.end("Hello John from express !!!");
});

// **** ****
app.listen(3000, "127.0.0.1", () => {
    console.log(`Server is listening on localhost port 3000`);
});
var express = require('Express'); 
var app = express();  

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {  
    console.log("There is a GET request for the homepage!");
    res.send('Here is the GET Method');  
})

// This responds to a POST request for the homepage
app.post('/', function (req, res) {
    console.log("A POST request for the homepage is accessed."); 
    res.send('Here is the POST Method');
})

// This responds to a GET request for the /list_user page
app.get('/list_user', function (req, res) {  
    console.log("Got a GET request for /list_user");
    res.send('This is Page Listing');
})

// This responds to a GET request for abcd, abxcd, abl23cd, and so on
app.get('/ab*cd', function(req, res) {  
    console.log("Got a GET request for /ab*cd");  
    res.send('Pattern Match Page');
})

app.get('/user_student', function(req, res) {  
    console.log("Got a GET request for /user_student");  
    res.send('Avenir, Christian C. WD-303');
})

var server = app.listen(4001, function () {
var host = server.address ().address
var port = server.address ().port
console.log("Example app listening at http://%s:%s", host, port)
})
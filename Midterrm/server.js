var express = require("Express");

var app = express();

app.get("/", (request, response) => {
    response.send("Hello, World!");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
//require dependencies
//express
//path
var express = require("express");


//initialize express server
var app = express();
var PORT = process.env.PORT || 3000;

//middleware stuffs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//require modules
//apiRoutes
//htmlRoutes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//start listening... shhhh!!
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
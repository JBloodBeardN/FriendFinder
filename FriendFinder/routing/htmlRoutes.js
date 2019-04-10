var path = require("path");

module.exports = function(app) {

app.get("/survey",function(req, res){
// deliver static survey page
res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("*",function(req, res){
 // deliver static home page
 res.sendFile(path.join(__dirname, "home.html"));
});

};
//module.exports
//make this available to server.js
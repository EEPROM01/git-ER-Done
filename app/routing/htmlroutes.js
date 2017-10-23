var path = require("path");

module.exports = function(app) {

app.get('/survey', function (req, res) {
    res.sendfile(path + join(dirname + '/../public/survey.html'));
  });
   
   //default being home (home Page)
  //.....................
  app.get(function (req, res) {
    res.sendfile(path + join(dirname + '/../public/home.html'));
  });
   
   
}
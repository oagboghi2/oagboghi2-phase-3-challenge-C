//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

//routes
const mainRoutes = require('./routes.js');
app.use(mainRoutes);

app.get('/', function(req, res, next){
  res.send("Hello to you");
});

//port
app.listen(3000, function(){
  console.log("The backend is in another castle");
})

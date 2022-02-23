// Standard Template

const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;


//Core code

app.get("/", function (req, res){
  res.render('home');
});



app.listen(PORT, function(){
  console.log("Server running successfully at " + PORT);
});

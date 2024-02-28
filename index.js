require('dotenv').config()

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const Routes = require('./routes');
var app = express();

app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(`${process.cwd()}/public`));
app.use('/', Routes);


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

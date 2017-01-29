let express = require('express');

// create an instance of the express server - app
let app = express();

// create the port constant
const port = 3000;

let path = require('path');



console.log(`Server started at http://localhost:${port}`);

// ROUTING - mounted our routes

// second route is '/about'
app.get('/about', (req, res, next) => {
 res.sendfile(path.join(__dirname+'/about.html'));
});

//third route is is '/contact'/
app.get('/contact', (req, res, next) => {
 res.sendfile(path.join(__dirname+'/contact.html'));
});

// first route is '/' - root of my website
app.get('/', (req, res, next) => {
  res.sendfile(path.join(__dirname+'/index.html'));
});

// start listening on the port
app.listen(port);
// Get all environement variables in our app //todo npm install dotenv
require("dotenv").config();

// Import express //todo npm install express

const express = require("express");
const app = express();

// Import cors if needed //todo npm install cors
const cors = require("cors");
// use it as a middleware to allow every domain to get connected
app.use(cors("*"));

// Import Sanitizer if needed to escape HTML from user, in case of PATCH & POST method //todo npm install sanitizer
const sanitizer = require("sanitizer");
// use it as a middleware for each req.body properties to become a safe value (converted with sanitizer). HTML code will become just a text
app.use((request, response, next) => {
  if (request.body) {
    for (const prop in request.body) {
        request.body[prop] = sanitizer.escape(request.body[prop]);
    }
  }
  next();
});

// Import body-parser to access req.body in POST request
app.use(express.urlencoded({extended:true}));

// If there are static file
// app.use(express.static('./public'));

// Import router
const router = require('./app/router');

// Use router
app.use(router);

// Are we connected ?
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening !");
});

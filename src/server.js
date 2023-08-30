const express = require('express'); // commonjs

const path = require('path'); // commonjs
// import express from 'express'; //es modules
require('dotenv').config();

// console.log('>>> check env: ', process.env);

const app = express(); // app express => hardcore => .uat .prod ???
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;
// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// khai báo route
app.get('/', (req, res) => {
  res.send('Hello World vs lppduy & nodemon 🚀 !');
  // res.render('sample.ejs');
});

app.get('/abc', (req, res) => {
  res.send('Check ABC');
});

app.get('/lppd', (req, res) => {
  res.send('<h1>Duy is learning coding 🤡</h1>');
});

//
app.listen(port, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});

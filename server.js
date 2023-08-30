const express = require('express'); // commonjs
// import express from 'express'; //es modules

const app = express(); // app express
const port = 8081; // port

// khai báo route
app.get('/', (req, res) => {
  res.send('Hello World vs lppduy !');
});

app.get('/abc', (req, res) => {
  res.send('Check ABC');
});

app.get('/lppd', (req, res) => {
  res.send('<h1>Duy is learning coding 🤡</h1>');
});

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

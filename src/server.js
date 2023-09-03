require('dotenv').config();

const express = require('express'); // commonjs
const path = require('path'); // commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('../src/routes/web');
const connection = require('./config/database');

const app = express(); // app express => hardcore => .uat .prod ???
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai báo route
app.use('/', webRoutes);

// simple query
connection.query('SELECT * FROM Users', function (err, results, fields) {
  console.log('>>>results', results); // results contains rows returned by server
  console.log('>>>fields', fields); // fields contains extra meta data about results, if available
});

app.listen(port, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});

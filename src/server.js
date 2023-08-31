require('dotenv').config();
const express = require('express'); // commonjs
const path = require('path'); // commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('../src/routes/web');

const app = express(); // app express => hardcore => .uat .prod ???
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai báo route
app.use('/', webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});

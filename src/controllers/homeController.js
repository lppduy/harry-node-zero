const connection = require('../config/database');

const getHomepage = (req, res) => {
  // process data
  // call model
  let users = [];
  connection.query('SELECT * FROM Users', function (err, results, fields) {
    users = results;
    console.log('>>>results', results);

    console.log('>>>check users', users);
    res.send(JSON.stringify(users));
    // res.send('Hello World vs lppduy & nodemon 🚀 !');
  });
};

const getABC = (req, res) => {
  res.send('Check ABC');
};

const getLppd = (req, res) => {
  res.render('sample.ejs');
};

module.exports = {
  getHomepage,
  getABC,
  getLppd,
};

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World vs lppduy & nodemon 🚀 !');
});

router.get('/abc', (req, res) => {
  res.send('Check ABC');
});

router.get('/lppd', (req, res) => {
  // res.send('<h1>Duy is learning coding 🤡</h1>');
  res.render('sample.ejs');
});

module.exports = router;

const getHomepage = (req, res) => {
  // process data
  // call model
  res.send('Hello World vs lppduy & nodemon 🚀 !');
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

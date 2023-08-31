const express = require('express');
const { getHomepage, getABC, getLppd } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route',handler')

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/lppd', getLppd);

module.exports = router;

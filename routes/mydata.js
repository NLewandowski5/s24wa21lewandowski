var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Received request for /mydata');
  res.render('mydata', { title: 'Nolan Lewandowski' });
});

module.exports = router;

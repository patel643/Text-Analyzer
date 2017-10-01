var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Textalyze' });
});
router.post('/aurl', function(req, res, next) {
  
  res.render('aurl',{title: 'Analyzed'});
});
module.exports = router;

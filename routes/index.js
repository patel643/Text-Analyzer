var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Textalyze' });
});
router.post('/aurl', function(req, res, next) {
  var text = req.body.textdata;
	console.log(text);
    var nos = text.split('.');
    console.log(nos.length-1);
  res.render('aurl',{title: 'Analyzed' , nos:nos.length-1});
});

module.exports = router;

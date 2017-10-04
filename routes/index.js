var express = require('express');
var router = express.Router();

var app = express();

app.use('/public', express.static(__dirname + '/public'));
 /*GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Textalyze' });
});



module.exports = router;

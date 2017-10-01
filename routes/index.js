var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('test2', { title: 'Express' });
=======
  res.render('index', { title: 'Textalyze' });
});
router.post('/aurl', function(req, res, next) {
  
  res.render('aurl',{title: 'Analyzed'});
>>>>>>> 6b6b383762e91078a2a842eb61a601c0732b3a26
});
module.exports = router;

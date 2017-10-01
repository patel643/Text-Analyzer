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
<<<<<<< HEAD
  var text = req.body.textdata;
	console.log(text);
    var nos = text.split('.');
    console.log(nos.length-1);
  res.render('aurl',{title: 'Analyzed' , nos:nos.length-1});
=======
  
  res.render('aurl',{title: 'Analyzed'});
>>>>>>> 6b6b383762e91078a2a842eb61a601c0732b3a26
>>>>>>> 31653733acc909598f877c92b1c841a4836e0645
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Textalyze' });
});
router.post('/aurl', function(req, res, next) {
  var text = req.body.textdata;
	console.log(text);
	
    var nos = text.split(/[.,?]/); //number of sentences
    console.log(nos.length-1);
	
	var wordarr=[];
	var temp=nos[0].split(" ");
	if(temp!="")
		wordarr[0]=temp.length;
	console.log("word 1:"+wordarr[0]);
	
	for(var i=1; i<nos.length-1; i++){
		console.log(nos[i]);
		temp=nos[i].split(" ");
		wordarr[i]=temp.length-1;
		
		console.log("word "+i+": "+wordarr[i]);
	}



	var concordance = {};
	var tokens = text.split(" ");
	for (var i = 0; i < tokens.length; i++){
		var word = tokens[i];
		// find new word
		if (concordance[word] == undefined){
			concordance[word] = 1;
			// seen this word before
		} else {
			concordance[word] ++;
		}

		console.log("word " + ": " + concordance[word]);

	}




  res.render('aurl',{title: 'Analyzed' , nos:nos.length-1, wordarr:wordarr, concordance: concordance});
});

module.exports = router;

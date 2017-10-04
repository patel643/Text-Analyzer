var express = require('express');
var router = express.Router();
var wordarr=[];
var app = express();

router.post('/test', function(req, res, next) {
	var text = req.body.textdata;
	console.log(text);
	
    var nos = text.split(/[.?]/); //number of sentences
    console.log(nos.length-1);
	
	 //no. of words per sentence
	var temp=nos[0].split(" ");
	if(temp!="")
		wordarr[0]=temp.length;
	console.log("word 1:"+wordarr[0]);
	
	for(var i=1; i<nos.length-1; i++){
		console.log(nos[i]);
		temp=nos[i].split(" ");
		wordarr[i]=temp.length-1;
		
		console.log("word "+(i+1)+": "+wordarr[i]);
	}


	var concordance=new Array(0); //frequency of words
	var words= new Array(0);
	var length=0;
	var tokens = text.split(/[." "?]/).filter(Boolean);
	console.log(tokens.length)
	for (var i = 0; i < tokens.length; i++){
		console.log(tokens[i])
			var found=0;
			var j=0;
			for(;j < words.length+1; j++){
				if(tokens[i]==words[j]){
					//console.log("equal part");
					found=1;
					concordance[j]++;
					break;
				}
				else if(found == 0 & j==length){
					//console.log("not equal part");
					words[length]=tokens[i];
					//console.log(words[length]);
					concordance[length]=1;
					length++;
					break;
				}
		
		
			}
		

	


	}
var listed=new Array(0);
	for (var i = 0; i < length; i++){
			
			 listed[i] =  words[i] + ': ' + concordance[i];
			
	}
		 console.log(listed);
	
	
	var response={
		nos:nos.length-1, wordarr:wordarr, words: words, concordance: concordance, length: length
		
	}
	
  
	res.render('aurl',{title: 'Some Interesting Details About Your Data' , nos:nos.length-1, wordarr:wordarr, words: words, concordance: concordance, length: length, listed: listed});
 
});
app.get('/', function(req, res){
  res.send(__dirname+'/ajax/myvar');
 });

module.exports = router;
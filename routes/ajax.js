var express = require('express');
var router = express.Router();
var wordarr=[];
var app = express();
var fetch = require('node-fetch');


const mySpecialWindowFunction = () => {

  /* START HACK */
  if (!process.env.BROWSER) {
    global.window = {}; // Temporarily define window for server-side
  }
  /* END HACK */

  return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
};
router.post('/test', function(req, res, next) {
	var text = req.body.textdata;
	
    var nos = text.split(/[.?]/); //number of sentences
	
	 //no. of words per sentence
	var temp=nos[0].split(" ");
	if(temp!="")
		wordarr[0]=temp.length;
	
	for(var i=1; i<nos.length-1; i++){
		temp=nos[i].split(" ");
		wordarr[i]=temp.length-1;	
	}
	
	var listwd=new Array(0);
			for (var i = 0; i < nos.length-1; i++){
					 listwd[i] =  nos[i] + ': ' + wordarr[i];
					
			}

	
	
	
	var concordance=new Array(0); //frequency of words
	var words= new Array(0);
	var length=0;
	var tokens = text.split(/[." "?]/).filter(Boolean);
	for (var i = 0; i < tokens.length; i++){
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
		 
	
	
	var responsedata={
		nos:nos.length-1, listwd: listwd, wordarr:wordarr, words: words, concordance: concordance, length: length, listed: listed
		
	}
	/*app.get('/:all',sendAll);
	function sendAll(request,response){
		response.send(responsedata);
	}*/
	
	
  
	res.render('aurl',{title: 'Some Interesting Details About Your Data' , nos:nos.length-1,listwd: listwd, wordarr:wordarr, words: words, concordance: concordance, length: length, listed: listed});
 
});




module.exports = router;
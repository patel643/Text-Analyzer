var express = require('express');
var router = express.Router();

var app = express();
var fetch = require('node-fetch');
var wordarr=[];
var nos=[];
var listwd=new Array(0);
var concordance=new Array(0); //frequency of words
var words= new Array(0);
var length=0;
var listed=new Array(0);
	

router.post('/test', function(req, res, next) {
	var text = req.body.textdata;
	
    nos = text.split(/[.?]/); //number of sentences
	
	 //no. of words per sentence
	var temp=nos[0].split(" ");
	if(temp!="")
		wordarr[0]=temp.length;
	
	for(var i=1; i<nos.length-1; i++){
		temp=nos[i].split(" ");
		wordarr[i]=temp.length-1;	
	}
	
	
			for (var i = 0; i < nos.length-1; i++){
					 listwd[i] =  nos[i] + ': ' + wordarr[i];
					
			}

	
	
	
	
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

router.post('/plot', function(req,res){
	var data={
		data1: nos,
		data2: listwd,
		data3: wordarr,
		data4: words,
		data5: concordance,
		data6: length,
		data7: listed
	}
	res.json(data);
	data=[];
	
})



module.exports = router;
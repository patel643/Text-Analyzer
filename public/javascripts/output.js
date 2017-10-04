 /*$.get('/:all', function(rsp) {
      console.log(rsp);
 });*/
 
 //var datad = Window.localStorage.getItem('person');
 //console.log(datad);
var nos=0;
var listwd= new Array(0);
var wordarr= new Array(0);
var words= new Array(0);
var concordance= new Array(0);
var length=0;
var listed= new Array(0);

$.ajax({
	type:"POST",
	async: false,
	url: '/ajax/plot',
	success: function(d1){
		nos=d1.data1;
		listwd= d1.data2;
		wordarr= d1.data3;
		words= d1.data4;
		concordance= d1.data5;
		length=d1.data6;
		listed= d1.data7;
	}
	
});

window.onload = function () {
	//chart 1 data
    var data = []; var dataSeries = { type: "column" };
    var dataPoints = [];

    for (var i = 0; i < nos.length; i += 1) {
		var y= wordarr[i]; 
         dataPoints.push({
          x: i + 1 ,
          y: y 	  
           });	
        }
     dataSeries.dataPoints = dataPoints;
     data.push(dataSeries);  
	 
	
	
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Distribution of Words per Sentence"           
		},
		axisY:{
        interval: 5,
		title: "Number of Words"
      },
	  axisX:{
       interval: 1,
	   title: "Sentence"
     },
		data: data, 
		
	});
	chart.render();
	
	 //chart 2 data
	 var data = []; var dataSeries = { type: "line" };
		var dataPoints = [];

		for (var i = 0; i < length; i += 1) {
			var y= concordance[i]; 
			var x= words[i];
			 dataPoints.push({
			  label: x ,
			  y: y 	  
			   });	
			}
		 dataSeries.dataPoints = dataPoints;
		 data.push(dataSeries); 
		 var chart1 = new CanvasJS.Chart("chartContainers", {
		title:{
			text: "Frequency of Words"           
		},
		axisX: {
			title:"Words",
				labelAngle: -30
			},
			axisY:{
        interval: 5,
		title: "Frequency"
      },
		data: data, 
		
	});
	chart1.render();
}
 

 
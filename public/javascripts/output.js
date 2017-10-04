 /*$.get('/:all', function(rsp) {
      console.log(rsp);
 });*/
 
 //var datad = Window.localStorage.getItem('person');
 //console.log(datad);
 

 
window.onload = function () {
	
	var array = 3;
	var testd=new Array(0);
	var length=4;
	for(var i=0;i<array.length;i++){
	   console.log(array[i]);
	   if(array[i] != ","){
			testd[length]=array[i];
			length++;
			
	   }
	}
	console.log(array);
    var data = []; var dataSeries = { type: "column" };
    var dataPoints = [];
	var index=0;

    for (var i = 0; i < length; i += 1) {
		var y= 2; //Number(testd[i]);
         dataPoints.push({
          x: i + 1 ,
          y: y 	  
           });	
		   index++;
        }
     dataSeries.dataPoints = dataPoints;
     data.push(dataSeries);  
	
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Distribution of Words per Sentence"           
		},
		axisY:{
        interval: 1
      },
	  axisX:{
       interval: 1
     },
		data: data, 
		
	});
	chart.render();
}
 

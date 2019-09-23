/* Index */
	if ( window.addEventListener ) {  
	  var state = 0, konami = [38,38,40,40,37,39,37,39,66,65];  
	  window.addEventListener("keydown", function(e) {  
		if ( e.keyCode == konami[state] ) state++;  
		else state = 0;  
		if ( state == 10 )  
		  window.open ("assets/media/Darude-Sandstorm.mp4","mywindow","menubar=1,resizable=1,width=350,height=250");  
		}, true);  
	}  
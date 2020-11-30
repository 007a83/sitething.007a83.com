/* Doge */
	if ( window.addEventListener ) {  
	  var state = 0, konami = [38,38,40,40,37,39,37,39,66,65];  
	  window.addEventListener("keydown", function(e) {  
		if ( e.keyCode == konami[state] ) state++;  
		else state = 0;  
		if ( state == 10 )  
		  window.open ("https://www.youtube.com/embed/000al7ru3ms?autoplay=1&disablekb=1&controls=0&loop=1&modestbranding=1&iv_load_policy=3&vq=hd1080","mywindow","menubar=1,resizable=1,width=350,height=250");
		}, true);  
	} 

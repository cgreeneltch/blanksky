

$('document').ready(function() {

  if (Modernizr.touch) {
alert('mobile')
}
else 
{
   
    	var options = { videoId: 'aLQeqyOK4lE', start: 3 };
	$('#wrapper').tubular(options);
}
});
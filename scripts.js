$(function(){
	var winWidth    = $(window).width()
	var slidesWidth = Math.ceil(winWidth/6);


	slides = $('div.container > div.cont > div');
	slides.css({width:slidesWidth+'px'});
	slides.last().css({'padding-right':'300px'});
	//$('div.slideshow div.train > div:last-child').css({'padding-right':'200px'});

	slides.mouseover(function(){
		slides.animate({width:slidesWidth-50+'px'},500);
		$(this).animate({width:slidesWidth+250+'px'},500);
	});
	$('div.container').mouseout(function(){
		slides.animate({width:slidesWidth+'px'},500);
	});
})
$(function(){
	var winWidth    = $(window).width()
	var slidesWidth = Math.ceil(winWidth/6);


	slides = $('div.subdevision div.train > div');
	slides.css({width:slidesWidth+'px'});
	slides.last().css({'padding-right':'3500px'});

	slides.mouseover(function(){
		slides.animate({width:slidesWidth-50+'px'},500);
		$(this).animate({width:slidesWidth+250+'px'},500);
	});
	$('div.subdevision').mouseout(function(){
		slides.animate({width:slidesWidth+'px'},500);
	});
})
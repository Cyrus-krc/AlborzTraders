$(function(){
	var winWidth    = $(window).width()
	var slidesWidth = Math.ceil(winWidth/6);


	slides = $('div.subdevision div.train > div');
	slides.css({width:slidesWidth+'px'});
	slides.last().css({'padding-right':'500px'});

	slides.mouseover(function(){
		slides.animate({width:slidesWidth-20+'px'},500);
		$(this).animate({width:slidesWidth+160+'px'},500);
	});
	$('div.subdevision').mouseout(function(){
		slides.animate({width:slidesWidth+'px'},500);
	});
})
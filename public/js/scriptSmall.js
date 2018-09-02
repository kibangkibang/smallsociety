$(document).ready(function(){
	$('#next').on('click',moveNext);
	$('#prev').on('click',movePrev);
	$('.frame').css('margin-left','-100vw');
	$('.frame').prepend($('.frame').children()[3]);
	setTimeout(autoAnimate,3000);
	var clicking = false;
	var width1 = $('.incruits .sections').width();
	var width2 = $('.incruits').width();
	var width3 = $('.finder').width();
	var extraWidth = Math.floor(width1 - width2)/100;
	$('.incruits').on('scroll',function(e){
		var leftRate = $('.incruits').scrollLeft()/extraWidth;
		$('.finder .ball').animate({left:leftRate + '%'},0);
	});
	$('.finder').on('mousedown',function(e){
		clicking = true;
		$('.incruits').scrollLeft(e.offsetX/width3*(width1 - width2));
	});
	$('.finder').on('mouseup',function(){
		clicking = false;
	});
	$('.finder').on('mousemove',function(e){
		if(clicking){
			$('.incruits').scrollLeft(e.offsetX/width3*(width1 - width2));
		}
	});
	$('.plan button').on('click',function(){
		location.href = '/apply';
	});
});
function autoAnimate(){
		moveNext();
		setTimeout(autoAnimate,3000);
}
function moveNext(){
	$($('.frame').children()[1]).css('margin-left','100vw');
	$('.frame').append($('.frame').children()[0]);
	$($('.frame').children()[0]).animate({'margin-left':'0'},'slow');
};
function movePrev(){
	$('.frame').prepend($('.frame').children()[3]);
	$($('.frame').children()[1]).css('margin-left','-100vw');
	$($('.frame').children()[1]).animate({'margin-left':'0'},'slow');
};
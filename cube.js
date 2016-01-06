
$(window).load(function(){
	$('.page-wrap').addClass('fade-slow');
	setTimeout(function(){$('.stage').addClass('fade-fast');},500);
	setTimeout(function(){$('button').addClass('button-in');},1000);
});

$(document).ready(function(){
		$('button').on('click',function(){
		$('button').addClass('button-out');
		//$('.wrap div').addClass('start-dice');
		$('#stage div').css({"opacity":"0","transition":"1s"});
		var number = 1 + Math.floor(Math.random() * 6);
		setTimeout(function(){$('.wrap').addClass('roll'+number);$('#stage div').css({"opacity":"1","transition":"1s"});},800);
		setTimeout(function(){$('button').unbind('mouseenter mouseleave :hover');$('#stage div').css({"opacity":"0","transition":"2s"});},5200);
		setTimeout(function(){$('.wrap').removeClass('roll'+number).addClass('cubespinner');$('#stage div').css({"opacity":"0.8","transition":"1s"});$('button').removeClass('button-out').addClass('button-in');},7000);
	});
});
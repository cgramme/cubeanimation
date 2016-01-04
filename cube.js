
$(window).load(function(){
	$('.page-wrap').addClass('fade-slow');
	setTimeout(function(){$('.stage').addClass('fade-fast');},500);
	setTimeout(function(){$('button').addClass('button-in');},1000);
});

$(document).ready(function(){
		$('button').on('click',function(){
		$('button').addClass('button-out');
		$('.wrap div').addClass('start-dice');
		$('.stage').addClass('fade-out');
		setTimeout(function(){$('.wrap').addClass('roll-dice');$('.stage').removeClass('fade-out').addClass('start-dice');},1000);
		setTimeout(function(){$('.wrap').removeClass('fade-out').addClass('start-dice');   $('.stage').removeClass('fade-out').addClass('start-dice');},7000);
	});
});

$(window).load(function(){
	$('.page-wrap').addClass('fade-slow');
	setTimeout(function(){$('.stage').addClass('fade-fast');},500);
	setTimeout(function(){$('button').addClass('button-in');},1000);
});

$(document).ready(function(){
	$('button').on('click',function(){
		$('button').addClass('button-out');
		$('.cubespinner div').addClass('start-dice');
	});
});
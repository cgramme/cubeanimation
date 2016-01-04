
$(window).load(function(){
	$('.page-wrap').addClass('fade-slow');
	setTimeout(function(){$('.stage').addClass('fade-fast');},500);
	setTimeout(function(){$('button').addClass('fade-fast');},2000);
});

$(document).ready(function(){
	$('button').on('click',function(){
		$('button').fadeOut(500);
	});
});
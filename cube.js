
var textLoop;

$(window).on('load',function(){
	$('.page-wrap').addClass('fade-slow');
	setTimeout(function(){$('.stage').addClass('fade-fast');},500);
	setTimeout(function(){$('button').addClass('button-in');},1000);

	//randomHighlight();
});

$(document).ready(function(){
	$('button').on('click',function(){
		clearInterval(textLoop);
		$('.wrap div').removeClass('text-shadow');
		$('button').addClass('button-out');
		//$('.wrap div').addClass('start-dice');
		$('#stage div').css({"opacity":"0","transition":"1s"});
		var number = 1 + Math.floor(Math.random() * 6);
		setTimeout(function(){$('.wrap').addClass('roll'+number);$('#stage div').css({"opacity":"1","transition":"2s"});},800);
		//setTimeout(function(){$('.wrap div').addClass('roll-shadow');},3000);
		//setTimeout(function(){$('button').unbind('mouseenter mouseleave :hover');$('#stage div').css({"opacity":"0","transition":"2s"});},5200);
		setTimeout(function(){
			$('.wrap').removeClass('roll'+number).addClass('cubespinner');
			$('#stage div').css({"opacity":"0.8","transition":"1s"});
			$('button').removeClass('button-out').addClass('button-in');
			//$('.wrap div').removeClass('roll-shadow');
		},7000);
		//setTimeout(function(){randomHighlight();},9000);
	});
});

function randomHighlight(){
	//var number =".face" + (1 + Math.floor(Math.random() * 6));
	textLoop = setInterval(function(){
		var number =".face" + (1 + Math.floor(Math.random() * 6));
		$(number).addClass('text-shadow').delay(4500).queue(function(next){
                $(this).removeClass('text-shadow');
                next();
        });
	},300);
}

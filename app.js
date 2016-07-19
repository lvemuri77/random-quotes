var txt=document.getElementById('txt').innerHTML;

$(document).ready(function(){
	var photocaption;
	$("#getQuote").on("click",function(){
		var randomNum = Math.ceil(Math.random()*20);
		$.getJSON("https://startupquote.com/api/read/json?filter=text&start="+randomNum+"&callback=?", function(data) {
			$.each(data.posts, function(i, posts){
				photocaption = this["photo-caption"];
				$('#quoted-text >p').remove();

				$('<p>' + photocaption + '<\/p>').appendTo('#quoted-text');

				if ( i == 0 ) return false;
			});

	});
	});

	$('.button').on('click',function(){
		window.open('https://twitter.com/intent/tweet?hashtags=&text='+encodeURIComponent (txt));

	})
	});

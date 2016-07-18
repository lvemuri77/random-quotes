

$(document).ready(function(){
	$("#getQuote").on("click",function(){
		var randomNum = Math.ceil(Math.random()*20);

		$.getJSON("http://startupquote.com/api/read/json?filter=text&start="+randomNum+"&callback=?", function(data) {
			$.each(data.posts, function(i, posts){
				var photocaption = this["photo-caption"];
				$('#quoted-text >p').remove();

				$('<p>' + photocaption + '<\/p>').appendTo('#quoted-text');
				if ( i == 0 ) return false;
			});

	});
	});
	});


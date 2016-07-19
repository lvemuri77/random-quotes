/*var txt=document.getElementById('txt').innerHTML;

$(document).ready(function(){
	var photocaption;
	$("#getQuote").on("click",function(){
		var randomNum = Math.ceil(Math.random()*20);
		$.getJSON("http://startupquote.com/api/read/json?filter=text&start="+randomNum+"&callback=?", function(data) {
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
*/

$(document).ready(function(){
	var quote;
	var auth;
	$("#getQuote").on("click",function(){

		var randomNum = Math.ceil(Math.random()*20);
		$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(data) {

			$.each(data, function(){
				quote=$('#quoted-text').html(data.quoteText);

				if (data.quoteAuthor === '') {
    			data.quoteAuthor = 'Unknown';
  				}
				auth=$('#author').html("-" + data.quoteAuthor);

			});



	});

	});
	$('.button').on('click',function(){
		window.open('https://twitter.com/intent/tweet?hashtags=&text='+encodeURIComponent (quote.text())+auth.text());

	});


	});

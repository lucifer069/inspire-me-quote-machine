  $(document).ready(function() {
   	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",function(json){

  			html_text = json.quoteText;
  			html_author = "-"+json.quoteAuthor;
  			$(".quote-text").html(html_text);
  			$(".quote-author").html(html_author);
  		$('#tweet_quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + json.quoteText + '" ' + json.quoteAuthor));
  		
  		});
  	$("#new_quote").on("click",function(){
  		var html_text="";
  		var html_author="";
  		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",function(json){

  			html_text = json.quoteText;
  			html_author = "-"+json.quoteAuthor;
  			$(".quote-text").html(html_text);
  			$(".quote-author").html(html_author);
  		$('#tweet_quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + json.quoteText + '" ' + json.quoteAuthor));

  		});




  	});



  });
  

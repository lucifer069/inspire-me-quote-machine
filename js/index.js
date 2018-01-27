  $(document).ready(function() {
   	$.getJSON("https://talaikis.com/api/quotes/random/",function(json){

  			html_text = json.quote;
  			html_author = "-"+json.author;
  			$(".quote-text").html(html_text);
  			$(".quote-author").html(html_author);
  		$('#tweet_quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + json.quote + '" ' + json.author));
  		
  		});
  	$("#new_quote").on("click",function(){
  		var html_text="";
  		var html_author="";
  		$.getJSON("https://talaikis.com/api/quotes/random/",function(json){

  			html_text = json.quote;
  			html_author = "-"+json.author;
  			$(".quote-text").html(html_text);
  			$(".quote-author").html(html_author);
  		$('#tweet_quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + json.quote + '" ' + json.author));

  		});




  	});



  });
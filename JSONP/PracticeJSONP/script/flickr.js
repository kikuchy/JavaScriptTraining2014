window.onload = function() {
    var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=drawImg&tags=';

	var searchButton = document.getElementById("searchButton");
	searchButton.onclick = function(){
		var keyword = document.getElementById("keyword");
		var src = url + encodeURI(keyword.value);
		var jsonp = document.createElement("script");
		jsonp.src = src;
		document.body.appendChild(jsonp);
	};
};

function drawImg(result) {
	var resultArea = document.getElementById("resultArea");
	resultArea.innerHTML = "";
	result.items.forEach(function(item){
		var img = document.createElement("img");
		img.src = item.media.m;
		img.title = item.title;
		resultArea.appendChild(img);
	});
}



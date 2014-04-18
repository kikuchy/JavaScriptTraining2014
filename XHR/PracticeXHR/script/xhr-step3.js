$(function(){
	var path = "http://localhost:8000/result/";

	$("#bloodTypeBox").on("change", function(){
		var bloodType = $(this).val();
		var url = path + "type-" + bloodType + ".txt";
		$.ajax(url).done(function(result){
			$("#resultArea").text(result);
		});
	});
});

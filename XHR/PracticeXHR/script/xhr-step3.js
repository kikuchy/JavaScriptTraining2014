$(function(){
	var path = location.origin + "/result/";

	$("#bloodTypeBox").on("change", function(){
		var bloodType = $(this).val();
		if(bloodType === "default") return;
		var url = path + "type-" + bloodType + ".txt";
		$.ajax(url).done(function(result){
			$("#resultArea").text(result);
		}).fail(function(error){
			console.error(error);
		});
	});
});

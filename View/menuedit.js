setMenuEdit = function(){

	$(".play-code").click( function(){

		canvasanimations[$(this).attr("ref")].render.play();
		
	});

	$(".stop-code").click( function(){
		
		canvasanimations[$(this).attr("ref")].render.stop();
		
	});

	$(".next-code").click( function(){
		
		canvasanimations[$(this).attr("ref")].render.next();
		
	});

	$(".prior-code").click( function(){
		
		canvasanimations[$(this).attr("ref")].render.prior();
		
	});

	$(".reload-code").click( function(){
		
		canvasanimations[$(this).attr("ref")].render.reload();
		
	});
	$(".export-image").click( function(){
		alert("Função Indisponível no momento!")
	});

	$(".export-code").click( function(){
		alert("Função Indisponível no momento!")
	});



}
createCanvas = function(parent, id, canvaswidth, canvasheight){

		var element = '<div class="viwer-animation-code"><div class="title">';
		
		element += '<div id="titleproject'+id+'" class="title"></div></div>'

		element += '<div class="container-menu">'

		element += '<div class="bt export-image" title="exportar como img" ref="'+id+'"><i class="far fa-image"></i></div>'
			
		element += '<div  class="bt export-code" title="exportar codigo" ref="'+id+'"><i class="far fa-file-code"></i></div></div>'
			

		element += '<div class="container-code" id="container-code'+id+'">'
		element += '<div class="container-mini-menu">'
		element += '<div ref="'+id+'" class="mini-bt play-code"><i class="fas fa-play"></i></div>'
				
		element += '<div  ref="'+id+'" class="mini-bt stop-code"><i class="fas fa-stop"></i></div>'
				
		element += '<div  ref="'+id+'" class="mini-bt prior-code"><i class="fas fa-backward"></i></div>'
				
		element += '<div  ref="'+id+'" class="mini-bt next-code"><i class="fas fa-forward"></i>		</div>'
				
		element +='<div  ref="'+id+'" class="mini-bt"><i class="fas fa-sync"></i></div></div>'
			
		element +='<div id="code'+id+'"></div></div>'

		element +='<div class="container-canvas" id="container-canvas">'
		element +='<canvas class="canvas" id="canvas'+id+'" width="'+canvaswidth+'px" height="'+canvasheight+'px"> </canvas></div>'

		element +='<div class="container-scenes" id="container-scenes'+id+'"><div class="h-scene">Cenas</div></div>'

		element +='<input id="file-project" accept="xml" type="file" hidden></div>'

		$(parent).html(element);
}
	
	
canvasanimations = [];
elems = $(".teste");
var canvaswidth = 800;
var canvasheight = 450;
for(let i =0; i < elems.length; i++){
	createCanvas( elems[i], i, canvaswidth, canvasheight);
	main = new Main(i, canvaswidth, canvasheight);
	main.loadProject(new Reader( $(elems[i]).attr("filename")));
	main.start();
	canvasanimations.push(main);
}

setMenuEdit();
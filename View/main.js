Main = function(id, w, h){
	this.direction = document.getElementById("direction");
	this.currentLine = 0;
	this.scenes = [];	
	this.code = [];
	this.currente_id = 0;
	this.render = null;
	this.id = id;
	this.w = w;
	this.h = h;
}

Main.prototype.createScene = function(){
	var sc = new Scene(10, this.scenes.length);
	this.scenes.push(sc);
	return sc;
}


Main.prototype.getScene = function(index){
	 
	// return [];
	 
	 if ((index>-1) && (index < this.scenes.length) )
		return this.scenes[index];
	return null;
}


Main.prototype.setCode = function(code){
	this.code = new Code(code);
}


Main.prototype.start = function(){
	
	this.render = new Render(this.id, this.w, this.h);
	this.render.configPixelRatio();

	var animation = new Animation();
	animation.setScene( this.scenes );
	animation.setCode ( this.code );

	animation.setCurrentScene(0);	
	this.render.setAnimation(animation);
	
	this.render.start( this.code );
	
	
	/*
	//var l = new Arrow(10, 20, 100, 10, "#000", 1, 0);
	//var l2 = new Arrow(10, 20, 100, 10, "#000", 1, 0);
	
	var scene1 = new Scene(10, 0);

	scene1.add(new Retangle(1,70, 90, 100, 100, "#000", "#fff", 2));
	scene1.add(new Text(2, "a", 20, 95, 95, "#000"));
	//scene1.add(l);
	//scene1.add(l2);
	this.scenes.push(scene1)
	var scene2 = new Scene(10, 1);
	scene2.setAll( scene1.getAll() );
	scene2.add(new Text(3, "10", 30, 125, 150, "#000"));
	this.scenes.push(scene2)
	var scene3 = new Scene(10, 2);
	scene3.setAll ( scene2.getAll() ) ;
	

	//scene1.add(b);
	scene3.add(new Retangle(4, 70, 90, 200, 100, "#000", "#fff", 2));
	scene3.add(new Text(5, "b", 20, 200, 95, "#000"));
	this.scenes.push(scene3)
	
	var scene4 = new Scene(10, 3);
	scene4.setAll ( scene3.getAll() ) ;
	
	scene4.add(new Text(6, "20", 30, 225, 150, "#000"));
	this.scenes.push(scene4)
	
	var scene5 = new Scene(10, 4);
	scene5.setAll ( scene4.getAll() ) ;
	this.scenes.push(scene5)
	scene5.add(new Retangle(7, 70, 90, 300, 100, "#000", "#fff", 2));
	scene5.add(new Text(8, "c", 20, 300, 95, "#000"));
	
	
	var scene6 = new Scene(10, 5);
	scene6.setAll ( scene5.getAll() ) ;
	scene6.add(new Text(9,"10", 30, 325, 150, "#000"));
	this.scenes.push(scene6)
	var scene7 = new Scene(10, 6);
	scene7.setAll ( scene6.getAll() ) ;
	scene7.set( new Text(10,"20", 30, 125, 150, "#d00"), 2);
	this.scenes.push(scene7)
	
	var scene8 = new Scene(10, 7);
	scene8.setAll ( scene7.getAll() ) ;
	scene8.set( new Text(11,"10", 30, 225, 150, "#d00"), 5);
	this.scenes.push(scene8)
	
	this.code = new Code(["var a;","a = 10;","var b;","b = 20;","var c;","c = a;","a = b;","b = c;"]);*/
	
}

Main.prototype.loadProject = function(reader){

	 var name = reader.getNode('name').innerHTML;
	 $("#titleproject"+this.id).html(name);
	 var author = reader.getNode('author').innerHTML;
	 
	 for (var i = 0; i < reader.getSize('scenes'); i++) {
			
			subnode = reader.getNode('elems',i);
			code = reader.getNode('code').innerHTML.split("@");
			currrent_scene = this.createScene();
			
			this.setCode(code);
			
			for (var j = 0; j <subnode.childNodes.length; j++){

				
				elem_type = subnode.childNodes[j].nodeName;
				elem =  subnode.childNodes[j].innerHTML.split(";");
				id = this.currente_id++; 
				
				if(elem_type == "rect"){
					
					currrent_scene.add( 
						new Retangle(id, parseInt(elem[0]), parseInt(elem[1]), parseInt(elem[2]), parseInt(elem[3]), elem[4], elem[5], elem[6])
					)
				
				}else if(elem_type  == "text"){
				
					currrent_scene.add( 
						new Text(id, elem[0], parseInt(elem[1]), parseInt(elem[2]), parseInt(elem[3]), elem[4])
					);
					
				}else if(elem_type == "arrow"){
					//console.log("arrow");
					//console.log(id,elem);
						
					currrent_scene.add(
						//x1, x2,y1,y2,color, linew, angle
						new Arrow(id,elem[0], elem[1], elem[2], elem[3], elem[4], elem[5])
						//new Arrow(id,100,40,100,20,"#000",5,-90)
					)
				}
			}
			
	  }
	  
  
  }
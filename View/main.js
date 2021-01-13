Main = function(){
	this.direction = document.getElementById("direction");
	this.currentLine = 0;	
}

Main.prototype.start = function(){
	
	render = new Render();

	//var l = new Arrow(10, 20, 100, 10, "#000", 1, 0);
	//var l2 = new Arrow(10, 20, 100, 10, "#000", 1, 0);
	
	var scene1 = new Scene(10, 0);

	scene1.add(new Retangle(1,70, 90, 100, 100, "#000", "#fff", 2));
	scene1.add(new Text(2, "a", 20, 95, 95, "#000"));
	//scene1.add(l);
	//scene1.add(l2);
	
	var scene2 = new Scene(10, 1);
	scene2.setAll( scene1.getAll() );
	scene2.add(new Text(3, "10", 30, 125, 150, "#000"));
	
	var scene3 = new Scene(10, 2);
	scene3.setAll ( scene2.getAll() ) ;
	

	//scene1.add(b);
	scene3.add(new Retangle(4, 70, 90, 200, 100, "#000", "#fff", 2));
	scene3.add(new Text(5, "b", 20, 200, 95, "#000"));
	
	
	var scene4 = new Scene(10, 3);
	scene4.setAll ( scene3.getAll() ) ;
	
	scene4.add(new Text(6, "20", 30, 225, 150, "#000"));
	
	
	var scene5 = new Scene(10, 4);
	scene5.setAll ( scene4.getAll() ) ;

	scene5.add(new Retangle(7, 70, 90, 300, 100, "#000", "#fff", 2));
	scene5.add(new Text(8, "c", 20, 300, 95, "#000"));
	
	
	var scene6 = new Scene(10, 5);
	scene6.setAll ( scene5.getAll() ) ;
	scene6.add(new Text(9,"10", 30, 325, 150, "#000"));
	
	var scene7 = new Scene(10, 6);
	scene7.setAll ( scene6.getAll() ) ;
	scene7.set( new Text(10,"20", 30, 125, 150, "#d00"), 2);
	
	
	var scene8 = new Scene(10, 7);
	scene8.setAll ( scene7.getAll() ) ;
	scene8.set( new Text(11,"10", 30, 225, 150, "#d00"), 5);
	
	
	
	var c = new Code(["var a;","a = 10;","var b;","b = 20;","var c;","c = a;","a = b;","b = c;"]);
	
	var animation = new Animation();
	animation.setScene( [ scene1, scene2, scene3, scene4, scene5, scene6, scene7 , scene8] );
	
	animation.setCode ( c );
	
	animation.setCurrentScene(0);	
	render.setAnimation(animation);
	
	render.start(c);
}
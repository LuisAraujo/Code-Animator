Formater = function(){
	this.lang = "";
	this.hash = [];
	this.color = ["#f00","#f0a","#00d", "#000" ];
	//this.color = ["#fff","#ff79c6","#f0a","#00d", "#50fa7b" ]
}
var a = 10;

Formater.prototype.getFormated = function(text){
	
	text = text.replace("; ", " ; ");
	text = text.replace("(", " ( ");
	text = text.replace(")", " ) ");
	text = text.replace("{", " { ");
	text = text.replace("}", " } ");
	text = text.replace("}", " } ");
	text = text.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
	text = text.replace("jump", "");
	var arr = text.split(" ");

	
	
	for(var i = 0; i < arr.length; i++){
		var color = this.hash2(arr[i]);
		if(arr[i][0] == '"' || arr[i][0] ==  "'" || arr[i][0] ==  "\""  ){

			arr[i] = "<b style='color: "+ color + "'> "+arr[i];
			while(true){
				if(arr[i][arr[i].length-1] == '"' || arr[i][arr[i].length-1] ==  "'" || arr[i][arr[i].length-1] ==  "\""){
					
					arr[i] = " "+arr[i]+" </b>";
					break;

				}else{
					arr[i] = " "+arr[i];
				}
				i++;
				if(i >= arr.length){
					break;
				}
						
			}

			
		}else if(color != undefined ){
			
			arr[i] = "<b style='color: "+ color + "'> "+arr[i]+" </b>";
		}else{
			arr[i] = "<span style='color: "+ this.color[this.color.length-1] + "'> "+arr[i]+" </span>";
		}
		
	}
	return arr.join(" ");
}


Formater.prototype.hash2 = function(param){
	
	if( param == "var")
		return this.color[1];
else if(  (param == "=") || (param == "==") || (param == ";") || (param == "}") || (param == "{") || (param == ")") || (param == "("))
		return this.color[0];
	else if( !isNaN(param) )
		return this.color[1];
	else if( (param == "void")  || ( param[0] == '"' ) || ( param[0] == "'" ) )
		return this.color[2];
	else if(  (param == "if") || (param == "for") || (param == "while") || (param == "do") )
		return this.color[3];
	else
		return undefined;
	
}
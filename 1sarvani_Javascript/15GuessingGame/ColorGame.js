var colors = [];
var numberOfColors = 3;
initialize();
var ans;
createAnsRGBString();


function getNewColors(){

	var i = numberOfColors;
	//delete all existing
	document.getElementById("rgbContainer").innerHTML= "";
	
	//Add new grid and colors
	var gridHtml = "";
	for(var j=0;j<i;j++){
		colors.push(generateRGBArrElement());	
		var style = "style='background-color:rgb("+colors[j].r+", "+colors[j].g+", "+colors[j].b+");'";
		if(j%3==0){
			gridHtml += "<div class=\"row\">";
		}
		gridHtml +="<div class=\"col-sm-3\" id=\"color"+j+"\" "+style+ "></div>";
	}
	document.getElementById("rgbContainer").innerHTML= gridHtml;

	//Select one for answer:
	ans = Math.floor(Math.random()*(i-1) );
	document.getElementById("rgbR").innerHTML = colors[ans].r;
	document.getElementById("rgbG").innerHTML = colors[ans].g;
	document.getElementById("rgbB").innerHTML = colors[ans].b;

}

var easyId = document.getElementById("easyId");
easyId.addEventListener("click", function(){
		numberOfColors = 3;
		initialize();
		easyId.classList.add("active");
		hardId.classList.remove("active");

});

var hardId = document.getElementById("hardId");
hardId.addEventListener("click", function(){
		numberOfColors = 9;
		initialize();
		hardId.classList.add("active");
		easyId.classList.remove("active");
});


function generateRGBArrElement(){

	var rgb = {
				r: generateRandomNum255(),
				g: generateRandomNum255(),
				b: generateRandomNum255()
	};
	return rgb

}

function generateRandomNum255(){
	var rand = Math.floor(Math.random()*255);
	return rand;

}

function gameCode(){
	for(var i=0; i<numberOfColors; i++){
		document.getElementById("color"+i).addEventListener("click", function(){
				console.log("CLICKED.....");
				if(compateWithAnswer(this)){
					//Everything turns same color
					turnEverythingIntoSameColor(this);
					document.getElementById("youwon").classList.add("white");
					console.log("GREAT!!!!");
				}else{
					//this box disappears
					this.style.backgroundColor="black";
					console.log("NOT YET..");
					document.getElementById("youwon").classList.remove("white");
				}
		});
	}

}

function compateWithAnswer(color){
	/*console.log("AA2:" + color.style.backgroundColor);
	console.log("AA2:" + createAnsRGBString());*/
	if( color.style.backgroundColor === createAnsRGBString()){
		return true;
	}else{
		return false;
	}

}

function createAnsRGBString(){
	//console.log("AA::"+"rgb("+colors[ans].r+", "+colors[ans].g+", " +colors[ans].b+")");
	return "rgb("+colors[ans].r+", "+colors[ans].g+", " +colors[ans].b+")" ;
}

function turnEverythingIntoSameColor(color){
	for(var i=0; i<numberOfColors; i++){
		document.getElementById("color"+i).style.backgroundColor = color.style.backgroundColor;
	}
}

function initialize(){
	colors = [];
	getNewColors();
	gameCode();
	

}
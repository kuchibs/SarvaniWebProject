/*var number = prompt("What is your guess?");
var correctNum = Math.random();

if(number>correctNum){
	number= prompt("Try to guess lower..")
} else if(number<correctNum){
	number= prompt("Try to guess HIGHER..")
} else{
	alert("You WON!!!! ");
}*/


var number = prompt("What is your guess between 1-10?");
var correctNum = Math.floor( Math.random()*10 )  ;
var isDone = false;

while(!isDone){
	if(number>correctNum){
		number= prompt("Try to guess lower..")
	} else if(number<correctNum){
		number= prompt("Try to guess HIGHER..")
	} else{
		alert("You WON!!!! ");
		isDone=true;
	}	
}

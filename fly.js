var cheat = 0;
function rnd(a,b){
	return Math.floor( Math.random()*(b-a+1) ) +a;
}


function randColor(){
	var c = '#';
	for(var i =0; i<6;i++){
		c+=rnd(0,15).toString(16);
	}
	return c;
	
}

window.onload=function (){
	var div= document.getElementsByClassName('fly').item(0);
	div.style.color=randColor();
	div.style.left=rnd(5,95)+'%';
	div.style.top=rnd(5,95)+'%';
	div.onmouseover=function(){
		div.style.left=rnd(5,95)+'%';
		div.style.top=rnd(5,95)+'%';
		div.style.color=randColor();
	}
}

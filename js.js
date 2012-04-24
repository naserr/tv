var bannerWidth = 525,
currentSlide = 0,
divBox, liBtns, picsLen, go2slide, nextSlide, prvSlide;


var cheat = 0;
function rnd(a,b){
	return Math.floor( Math.random()*(b-a+1) ) +a;
}


window.onload=function(){
	
	document.getElementById('loading').style.display='none';
	
	divBox = document.getElementsByClassName('banner').item(0).getElementsByClassName('box').item(0);
	
	liBtns=document.getElementsByClassName('tv').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');
	
	picsLen = liBtns.length;
	
	divBox.style.width = (picsLen*980) + 'px';
		
	go2slide = function (n){
		var hand = document.getElementsByClassName('hand').item(0);
		if(n>=picsLen) n=0;
		if(n<0) n=picsLen-1;
		deg =n*32.7;
				hand.style.webkitTransform = 'rotate('+deg+'deg)';		//chrome
				hand.style.MozTransform ='rotate('+deg+'deg)';
		
		divBox.style.left = (-n*bannerWidth) + 'px';
		currentSlide=n;
		
	};
	nextSlide = function (){
		go2slide(currentSlide+1)
	};
	prvSlide = function (){
		go2slide(currentSlide-1)
	};

	for(var i=0;i<picsLen;i++){
		(function(j){
			liBtns.item(j).onclick=function(){
				go2slide(j);
			}
		})(i);
	}
		
	
	var on= document.getElementsByClassName('on').item(0);
	var divGlass=document.getElementsByClassName('glass').item(0);
	var divPointer=document.getElementsByClassName('pointer').item(0);
		on.onclick = function(){
		divPointer.style.webkitTransform = 'rotate(90deg)';		//chrome
		divPointer.style.MozTransform ='rotate(90deg)';		//Firefox
		//divPointer.style.OTransform ='rotate(90deg)';		//OPERA
		//divPointer.style.msTransform = 'rotate(90deg)';​		//Cursed Microsoft ! IE :D
		divGlass.style.display='none';
	}
	
	var off= document.getElementsByClassName('off').item(0);
	var divGlass=document.getElementsByClassName('glass').item(0);
	var divPointer=document.getElementsByClassName('pointer').item(0);
		off.onclick = function(){
		divPointer.style.webkitTransform = 'rotate(0deg)';		//chrome
		divPointer.style.MozTransform ='rotate(0deg)';		//Firefox
		//divPointer.style.OTransform ='rotate(0deg)';		//OPERA
		//divPointer.style.msTransform = 'rotate(0deg)';​		//Cursed Microsoft IE ! :D
		divGlass.style.display='block';
				clearInterval(t);
				t = 0;
	}

																				/*  PALY SLIDESHOW  */	
				// Pausing
		document.getElementById('next').onclick = function (){
			clearInterval(t);
			t = 0;
	}
				// Pausing
		document.getElementById('back').onclick = function(){
				clearInterval(t);
				t = 0;
	}

			// Play
	document.getElementById('play').onclick = function(){			
	t = setInterval(nextSlide, 4000);
	}
	
	
	var divFly= document.getElementsByClassName('fly').item(0);
	divFly.onmouseover=function(){
		divFly.style.left=rnd(5,95)+'%';
		divFly.style.top=rnd(5,95)+'%';
		}
			divFly.onclick=function(){
				divFly.style.backgroundImage="url(img/flyshoot.png)";
				divFly = null;
				divFly=window.open('http://www.naserr.ir','','');
			}


}



var bannerWidth = 598,
currentSlide = 0,
divBox, liBtns, picsLen, go2slide, nextSlide, prvSlide;

window.onload=function(){
	
	document.getElementById('loading').style.display='none';
	
	divBox = document.getElementsByClassName('banner').item(0).getElementsByClassName('box').item(0);
	
	liBtns=document.getElementsByClassName('tv').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');
	
	picsLen = liBtns.length;
	
	divBox.style.width = (picsLen*980) + 'px';
		
	go2slide = function (n){
		if(n>=picsLen) n=0;
		if(n<0) n=picsLen-1;
		
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
	}

		
		// start
		document.getElementById('play').onclick = function(){
				var t = setInterval(nextSlide, 4000);
		}
			// Pausing
	document.getElementById('next').onclick = function(){
				clearInterval(t);
			t = 0;
	}
	
			// Resuming
	document.getElementById('play').onclick = function(){			
	t = setInterval(nextSlide, 4000);
	}
			// Pausing
		document.getElementById('back').onclick = function(){
				clearInterval(t);
			t = 0;
	}


}

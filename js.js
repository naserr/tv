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
	
	var divPower= document.getElementsByClassName('power').item(0);
	var divOff=document.getElementsByClassName('off').item(0);
	divPower.onclick = function(){
		divPower.style.backgroundImage='url(img/pon.png)';
		divOff.style.display='none';
	}
			document.getElementById('play').onclick = function(){
				setInterval(nextSlide,3000);
		}

}

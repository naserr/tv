window.onload=function(){
		var bannerWidth = 598;
	
	var divBox = document.getElementsByClassName('banner').item(0).getElementsByClassName('box').item(0);
	
	var liBtns=document.getElementsByClassName('tv').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');
	
	var divRot=document.getElementsByClassName('rotate').item(0);

	for(var i=0;i<liBtns.length;i++){
		(function(i){
			liBtns.item(i).onclick=function(){
				divBox.style.left= (-i*bannerWidth) + 'px';
				divRot.style.webkitTransform = 'rotate(20deg)';
			}
		})(i);
	}

	var divPower= document.getElementsByClassName('power').item(0);
	var divOff=document.getElementsByClassName('off').item(0);
	divPower.onclick = function(){
		divPower.style.backgroundImage='url(img/pon.png)';
		divOff.style.display='none';
	}
	
}

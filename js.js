window.onload=function(){
	
	var bannerWidth = 790;
	
	var divBox = document.getElementsByClassName('banner').item(0).getElementsByClassName('box').item(0);
	
	var liBtns=document.getElementsByClassName('tv').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');
	
	for(var i=0;i<liBtns.length;i++){
		(function(i){
			liBtns.item(i).onclick=function(){
				divBox.style.left= (-i*bannerWidth) + 'px';
			}
		})(i);
	}
	
}

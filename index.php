<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>TV Banner</title>
<link type="text/css" rel="stylesheet" href="style.css" />
<script type="text/javascript" src="js.js" ></script>
</head>

<body>
	<div id="loading">
			<div class="circle"></div>
			<div class="circle1"></div>
	</div>

<div class="container">
    <div class="under"></div>
	<div class="banner">
    	<div class="box">
				<?php
				$counter = 0;
					$dir = './img/banner';
					$sup_type = array('jpg','png','jpeg','gif'); 

					$d = dir($dir);
					while( $f=$d->read() ){
						$f_type = end (explode('.',$f) );
						 if( !in_array(strtolower($f_type),$sup_type) ) continue;
						echo "<div><img src='./img/banner/$f' /></div>";
						$counter ++;
					}
				?>
		</div>
	</div>
		<div class="tv">
			<ul class="btn">
                <li class="yek">1</li>
                <li class="do">2</li>
                <li class="se">3</li>
                <li class="char">4</li>
                <li class="panj">5</li>
                <li class="shish">6</li>
                <li class="haft">7</li>
					<?php
						for ($i=0;$i<$counter;$i++) {
							echo "<li></li>";
						}
					?>
            </ul>
			<div class="glass"></div>
			<div class="selector"></div>
			<div class="mainpower">
            	<a class="off" href="#">Off</a>
            	<a class="on" href="#">On</a>
                <div class="pointer"></div>
			</div>
			<!-- <div class="txt"> <img src="img/bgtxt.png" width="400" height="40"</div> -->
            <div class="pannel">
				<div class="next" title="Next/Puse" onclick="nextSlide()"><a id="next"></a></div>
                <div class="back" title="Back/Puse" onclick="prvSlide()"><a id="back"></a></div>
                <div id="play" title="Play"><p></p></div>
                
			</div>
        </div>
        <div class="tvtable"></div>
</div>
</body>
</html>

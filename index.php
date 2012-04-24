<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>TV Banner</title>
<link type="text/css" rel="stylesheet" href="style.css" />
<link type="text/css" rel="stylesheet" href="font/font.css" />
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
			
				$dir = './img/banner';
				$allowed_type = array('jpg','jpeg','png','gif');
				
				
				$d = dir($dir);
				$pics_len=0;
				while( $f = $d->read() ){
					$file_type = end(explode('.',$f));
					if( !in_array(strtolower($file_type),$allowed_type) ) continue;

					$file_name = substr($f,0,-strlen($file_type)-1);
					$otext_path = "$dir/$file_name.txt";

					if( file_exists($otext_path) ){
						$otext_text = file_get_contents($otext_path);
					}else{
						$otext_text = "";
					}

					echo "<div><div class='otext'>$otext_text</div><img src='$dir/$f' /></div>";
					$pics_len ++;
				}
		
				?>
		</div>
	</div>
		<div class="tv">
            <div class="hand"></div>
			<ul class="btn">
                <!--
                <li class="yek">1</li>
                <li class="do">2</li>
                <li class="se">3</li>
                <li class="char">4</li>
                <li class="panj">5</li>
                <li class="shish">6</li>
                <li class="haft">7</li>
                <li class="hasht">8</li>
                
                -->
        	<?php
				for($i=0;$i<$pics_len;$i++) echo '<li></li>';
			?>
            </ul>
			<div class="glass"></div>
			<div class="selector"></div>
			<div class="mainpower">
            	<a class="off">Off</a>
            	<a class="on">On</a>
                <div class="pointer"></div>
			</div>
            <div class="pannel">
				<div class="next"  onclick="nextSlide()"><p>Next/Pause</p><a id="next"></a></div>
                <div class="back"  onclick="prvSlide()"><p>Back/Pause</p><a id="back"></a></div>
                <div id="play" title="Play"><p></p></div>
                
			</div>
        </div>
        <div class="tvtable">
        	<a class="fly" value="Open window" onclick="divFly"></a>
        </div>
</div>
</body>
</html>

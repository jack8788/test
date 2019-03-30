$(function(){
    $('body').prepend('<div class="phone-top"><a href="http://www.9wln.com/e/index.html"></a></div>');
    $('body').prepend('<div class="top"><ul><li><a href="#" id="top"></a></li><li><a href="http://www.9wln.com/e/index.html">查<br>询<br>入<br>口</a></a></li></ul></div>');
    function height(){
        $('body').height();
        $(window).height();
        if($('body').height()<$(window).height()){
            $('.foot').css({
                "position":"absolute",
                "left":"0",
                "bottom":"0",
                "width":"100%"
            })
			$('.xxxx').css({
                "position":"absolute",
                "left":"0",
                "bottom":"130px",
                "width":"100%"
            })
        }else{
            $('.foot,.xxxx').css({
                "position":"none"
            })
        }
    }
    window.onload=function(){
        window.onresize = height;  
        height();
    }	
});
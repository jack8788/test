$("nav>div>.btn-nav").click(function () {
    $("nav>div>ul").slideToggle(500);
});

var TopBox = $(".top");
var goTop = $("#top");
var speed = 500;
goTop.click(function() {
    $("html,body").animate({
        scrollTop: 0
    }, speed);
})


var width =$('.pagination-wrapper ul li').eq(0).outerWidth();
for (var i = 0; i <= $('.pagination-wrapper ul li').length - 1; i++) {
    width=width+$('.pagination-wrapper ul li').eq(i).outerWidth();
}
width=($('.pagination-wrapper ul').width()-width)/2 + 'px';
$('.pagination-wrapper ul').css("margin-left",width);
/*判断浏览器内核*/
function myBrowser(){
    var userAgent = navigator.userAgent;
    var isOpera = userAgent.indexOf("Opera") > -1;
    if(isOpera){return "Opera"};
    if(userAgent.indexOf("Firefox")>-1) {return "FF";}
    if(userAgent.indexOf("Chrome")>-1){return "Chrome";}
    if(userAgent.indexOf("Safari")>-1){return "Safari";}
    if(!!window.ActiveXObject||"ActiveXObject" in window){return "IE";};
}
function alertShow(){$(".alert-info").css("display","block");$('.alert-box>ul>li>a').html("确定")}
function alertHidden(){$(".alert-info").css("display","none");}
/*检测系统错误显示*/
function wrong(){
    alertShow();
    changeAlert();
	/*如需修改错误提示，请修改此部分*/
	$('.alert-box>p').html("目前硕博定稿（VIP5.1/TMLC2）检测系统维护中，预计将于11.27日上午解决。<br>");
	$('.alert-box>ul').show();
	$('.alert-box>ul>li>a').html("确&nbsp;&nbsp;定");
}
/*时间过晚提示*/
var nowTime=new Date();
if(nowTime.getHours()<8 || nowTime.getHours()>=23){alertShow();$('.alert-box>p').html("请您继续提交，但目前提交时间已晚，系统可能于<span class='word-imp'>早上8:45后</span>出报告，请届时查看结果。")};
/*提示信息框样式修改部分*/
function changeAlert(){
    $('.alert-box>ul').hide();
    $('.alert-box').css({'width':'640px','margin-left':'-320px','top':'25%'});
    $('.alert-box>h3').html("注&nbsp;&nbsp;&nbsp;意");
    $('.alert-box>h3').css({'text-align':'center','font-size':'22px','background-color':'#fff6ba','color':'#f00'});
    $('.alert-box>p').css('font-weight','bold');
    $('.alert-box>ul>li>a').css({'font-weight':'bold','letter-spacing':'6px','text-indent':'-6px;'});
    $('.alert-box>ul>li>a').html("我已知道知网检测用途");
}
/*分解检测显示函数*/
function fenjie(type,web){
    alertShow();
    changeAlert();
    $('.alert-box>p').html("<span class='alert-title'>本检测类型</span><br><br>1.可做为期刊论文、职称论文的<span class='word-imp'>定稿检测</span>，其结果可作为投稿参考或评职称参考；<br><br>2.可做为学位论文<span class='word-imp'>初稿检测</span>，不论结果好坏都要尽量修改，以提高定稿检测的通过率,<span class='word-imp'>切勿类比定稿检测结果</span>以免影响正常毕业。<br><br>");
    var aHref='cnki'+type+'.html';
    $('#alertInfoBox>ul>li>a').attr('href',aHref);
    if (type=="amlc") {
        $('.alert-box>ul>li>a').html("我已知道知网检测（1.4万字符）用途");
    } else if(type=="samlc"){
        $('.alert-box>ul>li>a').html("我已知道知网检测（2.8万字符）用途");
    };
    var t=setTimeout("$('.alert-box>ul').show(300)",2000);
}
/*非IE、CHROME浏览器提示*/
// var mb = myBrowser();
// if (!(mb=="IE"||mb=="Chrome")){
//     alertShow();
//     // changeAlert();
//     $('.alert-box>p').html("推荐您使用IE浏览器或Chrome浏览器，以获得最好的网站体验。");
//     $('.alert-box>ul').show();
//     $('.alert-box>ul>li>a').html("继&nbsp;续&nbsp;访&nbsp;问");
// }
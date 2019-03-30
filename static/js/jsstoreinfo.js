var newsFoot = '<div class="news-word-foot"><em style="color:#f00;font-size:14px;font-style:normal">所有商家均经本站严格验证</em><br><em>为您的论文写作提供最全面的支援</em><br><em>———论文查重技术分享</em></div>';
$(function(){
    $('.news-word-word').append(newsFoot);
});
$('.news-word-bulletin>span').each(function(i,v){
    $(this).click(function(){
        alert(1);
        $('.bulletin').eq(i).toggle(300);
    })
})   })
})
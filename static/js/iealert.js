/*iealert.js修改版源代码
 * IE Alert! jQuery plugin
 * version 1
 * author: David Nemes http://nmsdvid.com
 * http://nmsdvid.com/iealert/
 */
    (function ($) {
        //jQuery1.9+已经不在支持live方法，事件改为初始化成功后在调用bind方法绑定click事件，这样无论导入什么版本的jQuery都可以兼容
        /*$("#goon").live("click", function () {
            $("#ie-alert-overlay").hide();
            $("#ie-alert-panel").hide();
        });;*/
        var isIE = window.ActiveXObject || 'ActiveXObject' in window;//判断是否IE浏览器
        if (isIE) {
            //jQuery1.9+已经不在支持$.browser属性，可以使用IE特有条件注释来判断IE浏览器
            //使用IE条件注释判断是否IE8-浏览器
            document.write('<!--[if lt ie 9]><script>window.isIE8=true;window.showIEAlert=true<\/script><![endif]-->');//IE8及以下
            document.write('<!--[if lt ie 8]><script>window.isIE7=true<\/script><![endif]-->');//IE7及以下
            document.write('<!--[if lt ie 7]><script>window.isIE6=true<\/script><![endif]-->');//IE6及以下
        }
        function initialize($obj, support, title, text) {
            var panel = "<span>" + title + "</span>"
                      + "<p> " + text + "</p>"
                      + "<div class='browser'>"
                      + "<ul>"
                      + "<li><a class='chrome' href='http://www.google.cn/intl/zh-CN/chrome/browser/desktop/index.html' target='_blank'></a></li>"
                      + "<li><a class='firefox' href='http://www.mozilla.org/en-US/firefox/new/' target='_blank'></a></li>"
                      + "<li><a class='ie9' href='http://windows.microsoft.com/en-US/internet-explorer/downloads/ie/' target='_blank'></a></li>"
                      + "<li><a class='safari' href='http://www.apple.com/safari/download/' target='_blank'></a></li>"
                      + "<li><a class='opera' href='http://www.opera.com/download/' target='_blank'></a></li>"
                      + "<ul>"
                      + "</div>";
            var overlay = $("<div id='ie-alert-overlay'></div>");
            var iepanel = $("<div id='ie-alert-panel'>" + panel + "</div>");
            var docHeight = $(document).height();
            overlay.css("height", docHeight + "px");
            if (support === "ie8") {// shows the alert msg in IE8, IE7, IE6
                //if ($.browser.msie && parseInt($.browser.version, 10) < 9) {//已经加了IE8及以下判断才会进入此函数，可以去掉这个判断
                $obj.prepend(iepanel);
                $obj.prepend(overlay);
                //}
                //if ($.browser.msie && parseInt($.browser.version, 10) === 6) {
                if (window.isIE6) {//IE6判断，添加特殊样式进行就行修正
                    $("#ie-alert-panel").css("background-position", "-626px -116px");
                    $obj.css("margin", "0");
                }
            } else if (support === "ie7") {     // shows the alert msg in IE7, IE6
                //if ($.browser.msie && parseInt($.browser.version, 10) < 8) {
                if (window.isIE7) {
                    $obj.prepend(iepanel);
                    $obj.prepend(overlay);
                }
                //if ($.browser.msie && parseInt($.browser.version, 10) === 6) {
                if (window.isIE6) {//IE6判断，添加特殊样式进行就行修正
                    $("#ie-alert-panel").css("background-position", "-626px -116px");
                    $obj.css("margin", "0");
                }
            } else if (support === "ie6" && window.isIE6) {     // shows the alert msg only in IE6
                //if ($.browser.msie && parseInt($.browser.version, 10) < 7) {//这个判断和if合并
                $obj.prepend(iepanel);
                $obj.prepend(overlay);
                $("#ie-alert-panel").css("background-position", "-626px -116px");
                $obj.css("margin", "0");
                // }
            }
        }; //end initialize function
        $.fn.iealert = function (options) {
            var defaults = {
                support: "ie7",  //IE版本支持，可以为ie8（ie8-都会显示提示），ie7（ie7-都会显示提示），ie6（ie6-都会显示提示）
                title: "\u4F60\u77E5\u9053\u4F60\u7684Internet Explorer\u662F\u8FC7\u65F6\u4E86\u5417?", // title text
                text: "\u4E3A\u4E86\u5F97\u5230\u6211\u4EEC\u7F51\u7AD9\u6700\u597D\u7684\u4F53\u9A8C\u6548\u679C,\u6211\u4EEC\u5EFA\u8BAE\u60A8\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\u7684Internet Explorer\u6216\u9009\u62E9\u53E6\u4E00\u4E2Aweb\u6D4F\u89C8\u5668.\u4E00\u4E2A\u5217\u8868\u6700\u6D41\u884C\u7684web\u6D4F\u89C8\u5668\u5728\u4E0B\u9762\u53EF\u4EE5\u627E\u5230.<br /><br /><h1 id='goon' style='font-size:20px;cursor:pointer;'>>>>\u7EE7\u7EED\u8BBF\u95EE</h1>"
            };
            var option = $.extend(defaults, options);
            return this.each(function () {
                if (window.showIEAlert) {//条件注释判断IE8及以下才执行初始化判断
                    //if ( $.browser.msie ) {
                    var $this = $(this);
                    initialize($this, option.support, option.title, option.text);
                    $("#goon").bind("click", function () {
                        $("#ie-alert-overlay").hide();
                        $("#ie-alert-panel").hide();
                    });
                } //if ie    
            });
        };
    })(jQuery);
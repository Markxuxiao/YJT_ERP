// iframesTabs框架
var tabs;
$(function () {
    "use strict"
    
    tabs = $('#tabs').iframesTabs();
    
    $(window).on('resize', function () {
        tabs.resizePanelContainer();
    });
    // 导航事件绑定
    // $('#sidebar-menu').on('click','li.has_sub',function(){

    //     var obj = {};
    //     var that = $(this).find("a");
    //     obj.url = that.data('url');
    //     obj.label = that.data('title');
    //     tabs.add(obj);
    // });
    // 初始化默认打开的选项卡
    (function(){
        if(CONFIG.TABS != undefined ){
            for (var i = 0; i < CONFIG.TABS.length; i++) {
                    tabs.temp_add(CONFIG.TABS[i]).setLock(true);
            }

            tabs.getTabByUrl(CONFIG.TABS[0].url).activate();
            // $('.ui-tabs-nav>li').eq(1).click(function(){
            //     var that = $(this);
            //     var data  = that.data('first')
            //     if (!data){
            //         $('.ui-tabs.ui-tabs-panel>div').eq(1).find('.l-tab-loading').show();
            //         $('.ui-tabs.ui-tabs-panel>div').eq(1).find('iframe').attr('src','myMassage.html').bind('load.tab',function(){
            //             $('.ui-tabs.ui-tabs-panel>div').eq(1).find('.l-tab-loading').hide();
            //         });
            //         that.data('first','true');
            //     }
            //     console.log(data)
            // });
            // $('.ui-tabs-nav>li').eq(2).click(function(){
            //     var that = $(this);
            //     var data  = that.data('first')
            //     if (!data){
            //         $('.ui-tabs.ui-tabs-panel>div').eq(2).find('iframe').attr('src','dashboard.html');
            //         that.data('first','true');
            //     }
            //     console.log(data)
            // });
            
        }else{
            var ele = $('#sidebar-menu').find('li.has_sub').first()
            ele.trigger('click')
            var url = ele.find("a").data('url')
            var tab = tabs.getTabByUrl(url)
            tab.setLock(true);
            tab.activate();
        }

        tabs.resizePanelContainer();
    })()

});

/**
* 子框架操作父页面tab
* 
**/
function iframecallback (active,options) {
    switch(active){
        /**
        * 新开标签页
        * iframecallback('add_tab',{url:'appManage.html',label:'修改应用'})
        **/
        case 'add_tab':
            if(options&&options.url){
                tabs.add(options);
            }
        break;
        /**
        * 移除某个tab或当前tab
        * iframecallback('remove_tab',{url:'appManage.html'}) 或 iframecallback('remove_tab')
        **/
        case 'remove_tab':
            var tab;
            if(options&&options.url){
                tab = tabs.getTabByUrl(options.url)
            }else{
                tab = tabs.getCurrentTab();
            }
            // tab&& new IframeTab(tab.tabs, tab.id).kill();
            tab&& tab.kill();
        break;
        /**
        * 刷新某个tab或当前tab
        * iframecallback('refresh_tab',{url:'appManage.html'}) 或 iframecallback('refresh_tab')
        **/
        case 'refresh_tab':
            var tab;
            if(options&&options.url){
                tab = tabs.getTabByUrl(options.url)
            }else{
                tab = tabs.getCurrentTab();
            }
            tab&&tab.refresh();
        break;
        /**
        * 激活某个tab或当前tab
        * iframecallback('activate_tab',{url:'appManage.html'})
        **/
        case 'activate_tab':
            var tab;
            if(options&&options.url){
                tab = tabs.getTabByUrl(options.url);
                tab.activate();
            }
        break;
        default:
        return;
    }
}


$(function () {
    // 查询
    $("#header-seach").on('click','li',function(){
        var $this = $(this).find('a')
        var text = $this.text()
        $("#header-seach").find('button').find('span:first').text(text)

    })

    // 更换权限
    $('#select-jurisdiction').on('changed.bs.select', function (e) {
        var data = $(this).val();
        $.post("test.php", data ,function(){
            tabs.getCurrentTab().refresh();
        } );
    });

})
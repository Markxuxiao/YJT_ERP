


$(function () {

  $("#header-seach").on('click','li',function(){
    var $this = $(this).find('a')
    var text = $this.text()
    $("#header-seach").find('button').find('span:first').text(text)

  })


  $('#select-jurisdiction').on('changed.bs.select', function (e) {
      var data = $(this).val();
      $.post("test.php", data ,function(){
            tabs.getCurrentTab().refresh();
      } );
    });

})


var tabs;
$(function () {
    "use strict"
    
    tabs = $('#tabs').iframesTabs();
    
    $(window).on('resize', function () {
        //console.log(1);
        tabs.resizePanelContainer();
    });

    $('#sidebar-menu').on('click','li.has_sub',function(){
        var obj = {}
        var that = $(this).find("a")
        obj.url = that.data('url')
        obj.label = that.data('title')
        tabs.add(obj)
    });

    (function(){
        var ele = $('#sidebar-menu').find('li.has_sub').first()
        ele.trigger('click')
        var url = ele.find("a").data('url')
        var tab = tabs.getTabByUrl(url)
        tab.setLock(true);
        tab.activate();
        tabs.resizePanelContainer();
    })()

});


function iframecallback (active) {
    switch(active){
        case 'refresh_tab':
            var tab = tabs.getTabByUrl("index2.html")
            tab.refresh();
        break;
        case 2:

        break;
        default:
        return;
    }
}
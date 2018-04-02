/**
 * 冻结表格左起N列插件
 * 使用
 *   在<table> 添加 freezeTable="1"
 * 必须
 *   <table>表格需要有外层div包裹，比如bootstrap的<div class="table-responsive"> 
 *   表格需要有背景色，不然会透过冻结看到下面
 * 备注
 *   此插件只会在移动端生效
 *   滚动加载时需要 $('[freezeTable]').freezeTable(); 进行初始化
 * 
 */
;(function(){
  var os = function() {  
       var ua = navigator.userAgent,  
       isWindowsPhone = /(?:Windows Phone)/.test(ua),  
       isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,   
       isAndroid = /(?:Android)/.test(ua),   
       isFireFox = /(?:Firefox)/.test(ua),   
       isChrome = /(?:Chrome|CriOS)/.test(ua),  
       isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),  
       isPhone = /(?:iPhone)/.test(ua) && !isTablet,  
       isPc = !isPhone && !isAndroid && !isSymbian;  
       return {  
            isTablet: isTablet,  
            isPhone: isPhone,  
            isAndroid : isAndroid,  
            isPc : isPc  
       };  
  }();

  var freezeTable = function($table){
    if(!$table.first('tr').find('td')) return "freezeTable";//防止表格不全
    var $wrap = $('<div style="overflow:hidden;position:absolute;top:0;border: 1px solid #ddd;"></div>')
    var $tb_clone = $table.clone();
    $tb_clone.removeAttr("freezeTable");
    $wrap.css('width',getFreezeWidth($table))
    $tb_clone.css('width',$table.css('width'))
    
    $wrap.append($tb_clone)
    $table.parent().wrap('<div style="position: relative;"></div>').append($wrap);

    return "freezeTable"
  }

  function getFreezeWidth($table){
    var freezeWidth = freezeNum = 0;
    var $tds = $table.first('tr').find('td');
    freezeNum = parseInt($table.attr('freezeTable'))
    if(freezeNum > 0){
      for (var i = freezeNum - 1; i >= 0; i--) {
        freezeWidth += parseInt($tds.eq(i).css('width').substring(-2))
      }
    }
    return freezeWidth;
  }

  $.fn.freezeTable = function(){
        // 非移动端不执行
        if(!os.isAndroid && !os.isPhone)return;
        return this.each(function () {
              var $this = $(this)
              var data  = $this.data('freezeTable')
              if (!data) $this.data('freezeTable', (data = freezeTable($this)))
            })
  }
 
  // HTML接口
  $(function(){
    $('[freezeTable]').freezeTable();
  })

})();

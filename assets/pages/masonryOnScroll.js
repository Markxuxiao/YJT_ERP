$(function(){
  /**
  * 瀑布瀑布流布局
  * 依赖：masonry.js
  **/
  $('#masonry').imagesLoaded(function() {
      $('#masonry').masonry({
              itemSelector: '.item',
              columnWidth: '.item'
          });
  });

});
// $.throttle and $.debounce
// $(window).scroll( $.throttle( 250, log ) );
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
(function ($) {
    var defaluts = {
        container: $('#masonry'),
        item : '.item',//滚动加载容器item
        scroll_distance :150, //距离下边多少距离加载
        callback: null
      };
    $.fn.extend({
        "masonryOnScroll": function (options) {
            var opts = $.extend({}, defaluts, options);
            function scroll (){
              var opt = opts;
              // 计算所有瀑布流块中距离顶部最大
              var containerItem = opt.container.find(opt.item);
              var itemNum=containerItem.length;
              var itemArr=[];
              itemArr[0]=containerItem.eq(itemNum-1).offset().top+containerItem.eq(itemNum-1)[0].offsetHeight;
              itemArr[1]=containerItem.eq(itemNum-2).offset().top+containerItem.eq(itemNum-1)[0].offsetHeight;
              itemArr[2]=containerItem.eq(itemNum-3).offset().top+containerItem.eq(itemNum-1)[0].offsetHeight;
              var maxTop=Math.max.apply(null,itemArr);
              var w_height = $(window).height();
              var d_height = $(document).scrollTop();
              if(maxTop< w_height + d_height + opt.scroll_distance){
                opt.callback&&opt.callback();
              }
            }
            //事件绑定
            $(window).scroll($.debounce(250,scroll));
        }//end masonryOnScroll
    }); 
})(window.jQuery);

//加载动画
(function($){

  var imloading_html = '<div id="imloading" style="width:150px;height:30px;line-height:30px;font-size:16px;text-align:center;border-radius:3px;opacity:0.7;background:#000;margin:10px auto 30px;color:#fff;"><i class="preloader"></i>&nbsp;加载中...</div>';
  $.showScrollLoading = function () {
      if ($('#imloading')[0]) return;
      $('body').append(imloading_html);
      return function(){$('#imloading').show();}
  }();
  $.hideScrollLoading = function () {
      $('#imloading').hide();
  };

  var loading_html = '<div class="preloader-indicator-overlay"></div><div class="preloader-indicator-modal"><span class="preloader preloader-white"></span></div>';
  $.showIndicator = function () {
      if ($('.preloader-indicator-modal')[0]) return;
      $('body').append();
  };
  $.hideIndicator = function () {
      $('.preloader-indicator-overlay, .preloader-indicator-modal').remove();
  };
})(window.jQuery);


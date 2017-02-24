$(function(){

  // 显示隐藏
  $('.table-list').on('click','.show_btn',function () {
      var that = $(this);
      var father = that.parent().parent().parent().parent();
      if (father.hasClass('on')) {
          father.removeClass('on');
          that.removeClass("fa-angle-down");
          that.addClass('fa-angle-up');
          //重置瀑布流布局
          $('#masonry').masonry();
      }else{
          father.addClass('on');
          that.removeClass('fa-angle-up');
          that.addClass("fa-angle-down");
          //重置瀑布流布局
          $('#masonry').masonry();
      }
  })
  /**
  * 瀑布瀑布流布局
  * 依赖：masonry.js
  **/
  $('#masonry').imagesLoaded(function() {
      $('#masonry').masonry({
              itemSelector: '.item',
              gutter: 0,
              isAnimated: true,
          });
   });

});


var data = {
    list: [
        {'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
       ,{'name':'M3219/地砖/316*316(优等)','chang_wei':'广州主仓-无仓位','se_hao':1,'price':42.90,'number':100000.00}
    ]
};


var container = $('#masonry');

var loading=$('#imloading');

// 初始化loading状态

loading.data("on",true);


$(window).scroll(function(){
    
    if(!loading.data("on")) return;

    // 计算所有瀑布流块中距离顶部最大
    var containerItem = container.find('.item');
    var itemNum=containerItem.length;

    var itemArr=[];

    itemArr[0]=containerItem.eq(itemNum-1).offset().top+containerItem.eq(itemNum-1)[0].offsetHeight;

    itemArr[1]=containerItem.eq(itemNum-2).offset().top+containerItem.eq(itemNum-1)[0].offsetHeight;

    itemArr[2]=containerItem.eq(itemNum-3).offset().top+containerItem.eq(itemNum-1)[0].offsetHeight;

    var maxTop=Math.max.apply(null,itemArr);
    // console.log(maxTop)
    // console.log($(window).height())
    // console.log($(document).scrollTop())
    if(maxTop<$(window).height()+$(document).scrollTop()+50){

        //加载更多数据

        loading.data("on",false).fadeIn(800);

        (function(sqlJson){

            /*这里会根据后台返回的数据来判断是否你进行分页或者数据加载完毕这里假设大于30就不在加载数据*/

            if(itemNum>230){

                loading.text('就有这么多了！');

            }else{

                var html = template('template_item',sqlJson);

                /*模拟ajax请求数据时延时800毫秒*/

                var time=setTimeout(function(){
                    
                    var $newElems = $(html).css({ opacity: 0}).appendTo(container);

                        $newElems.animate({ opacity: 1},800);

                        loading.data("on",true).fadeOut();

                        clearTimeout(time);

                },800)

            }

        })(data);

    }

});
/**
* Theme: Ubold Admin Template
* Author: Coderthemes
* Module/App: Main Js
*/


!function($) {
    "use strict";

    var Sidemenu = function() {
        this.$body = $("body"),
        this.$openLeftBtn = $(".open-left"),
        this.$menuItem = $("#sidebar-menu a")
    };
    Sidemenu.prototype.openLeftBar = function() {
      $("#wrapper").toggleClass("enlarged");
      $("#wrapper").addClass("forced");

      if($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")) {
        $("body").removeClass("fixed-left").addClass("fixed-left-void");
      } else if(!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")) {
        $("body").removeClass("fixed-left-void").addClass("fixed-left");
      }
      
      if($("#wrapper").hasClass("enlarged")) {
        $(".left ul").removeAttr("style");
      } else {
        $(".subdrop").siblings("ul:first").show();
      }
      
      toggle_slimscroll(".slimscrollleft");
      $("body").trigger("resize");
    },
    //menu item click
    Sidemenu.prototype.menuItemClick = function(e) {
       if(!$("#wrapper").hasClass("enlarged")){
        if($(this).parent().hasClass("has_sub")) {
          e.preventDefault();
        }   
        if(!$(this).hasClass("subdrop")) {
          // hide any open menus and remove all other classes
          $("ul",$(this).parents("ul:first")).slideUp(350);
          $("a",$(this).parents("ul:first")).removeClass("subdrop");
          $("#sidebar-menu .pull-right i").removeClass("md-remove").addClass("md-add");
          
          // open our new menu and add the open class
          $(this).next("ul").slideDown(350);
          $(this).addClass("subdrop");
          $(".pull-right i",$(this).parents(".has_sub:last")).removeClass("md-add").addClass("md-remove");
          $(".pull-right i",$(this).siblings("ul")).removeClass("md-remove").addClass("md-add");
        }else if($(this).hasClass("subdrop")) {
          $(this).removeClass("subdrop");
          $(this).next("ul").slideUp(350);
          $(".pull-right i",$(this).parent()).removeClass("md-remove").addClass("md-add");
        }
      } 
    },

    //init sidemenu
    Sidemenu.prototype.init = function() {
      var $this  = this;
      //bind on click
      $(".open-left").click(function(e) {
        e.stopPropagation();
        $this.openLeftBar();
      });

      // LEFT SIDE MAIN NAVIGATION
      $this.$menuItem.on('click', $this.menuItemClick);

      // NAVIGATION HIGHLIGHT & OPEN PARENT
      $("#sidebar-menu ul li.has_sub a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
    }

    //init Sidemenu
    // $.Sidemenu = new Sidemenu, $.Sidemenu.Constructor = Sidemenu
    
}(window.jQuery),


function($) {
    "use strict";

    var FullScreen = function() {
        this.$body = $("body"),
        this.$fullscreenBtn = $("#btn-fullscreen")
    };

    //turn on full screen
    // Thanks to http://davidwalsh.name/fullscreen
    FullScreen.prototype.launchFullscreen  = function(element) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    },
    FullScreen.prototype.exitFullscreen = function() {
      if(document.exitFullscreen) {
        document.exitFullscreen();
      } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    },
    //toggle screen
    FullScreen.prototype.toggle_fullscreen  = function() {
      var $this = this;
      var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
      if(fullscreenEnabled) {
        if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
          $this.launchFullscreen(document.documentElement);
        } else{
          $this.exitFullscreen();
        }
      }
    },
    //init sidemenu
    FullScreen.prototype.init = function() {
      var $this  = this;
      //bind
      $this.$fullscreenBtn.on('click', function() {
        $this.toggle_fullscreen();
      });
    },
     //init FullScreen
    $.FullScreen = new FullScreen, $.FullScreen.Constructor = FullScreen
    
}(window.jQuery),



//main app module
 function($) {
    "use strict";
    
    var App = function() {
        this.VERSION = "1.1.0", 
        this.AUTHOR = "Coderthemes", 
        this.SUPPORT = "coderthemes@gmail.com", 
        this.pageScrollElement = "html, body", 
        this.$body = $("body")
    };
    
     //on doc load
    App.prototype.onDocReady = function(e) {
      FastClick.attach(document.body);
      resizefunc.push("initscrolls");
      resizefunc.push("changeptype");

      $('.animate-number').each(function(){
        $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-duration"))); 
      });
    
      //RUN RESIZE ITEMS
      $(window).resize(debounce(resizeitems,100));
      $("body").trigger("resize");

      // right side-bar toggle
      $('.right-bar-toggle').on('click', function(e){
          e.preventDefault();
          $('#wrapper').toggleClass('right-bar-enabled');
      }); 

      
    },
    //initilizing 
    App.prototype.init = function() {
        var $this = this;
        //document load initialization
        $(document).ready($this.onDocReady);
        //init side bar - left
       // $.Sidemenu.init();
        //init fullscreen
        $.FullScreen.init();
    },

    $.App = new App, $.App.Constructor = App

}(window.jQuery),

//initializing main application module
function($) {
    "use strict";
    $.App.init();
}(window.jQuery);



/* ------------ some utility functions ----------------------- */
//this full screen
var toggle_fullscreen = function () {

}

function executeFunctionByName(functionName, context /*, args */) {
  var args = [].slice.call(arguments).splice(2);
  var namespaces = functionName.split(".");
  var func = namespaces.pop();
  for(var i = 0; i < namespaces.length; i++) {
    context = context[namespaces[i]];
  }
  return context[func].apply(this, args);
}
var w,h,dw,dh;
var changeptype = function(){
    w = $(window).width();
    h = $(window).height();
    dw = $(document).width();
    dh = $(document).height();

    if(jQuery.browser.mobile === true){
        $("body").addClass("mobile").removeClass("fixed-left");
    }

    if(!$("#wrapper").hasClass("forced")){
      if(w > 990){
        $("body").removeClass("smallscreen").addClass("widescreen");
          $("#wrapper").removeClass("enlarged");
      }else{
        $("body").removeClass("widescreen").addClass("smallscreen");
        $("#wrapper").addClass("enlarged");
        $(".left ul").removeAttr("style");
      }
      if($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")){
        $("body").removeClass("fixed-left").addClass("fixed-left-void");
      }else if(!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")){
        $("body").removeClass("fixed-left-void").addClass("fixed-left");
      }

  }
  toggle_slimscroll(".slimscrollleft");
}


var debounce = function(func, wait, immediate) {
  var timeout, result;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) result = func.apply(context, args);
    return result;
  };
}

function resizeitems(){
  if($.isArray(resizefunc)){  
    for (i = 0; i < resizefunc.length; i++) {
        window[resizefunc[i]]();
    }
  }
}

function initscrolls(){
    if(jQuery.browser.mobile !== true){
      //SLIM SCROLL
      $('.slimscroller').slimscroll({
        height: 'auto',
        size: "5px"
      });

      $('.slimscrollleft').slimScroll({
          height: 'auto',
          position: 'right',
          size: "5px",
          color: '#dcdcdc',
          wheelStep: 5
      });
  }
}
function toggle_slimscroll(item){
    if($("#wrapper").hasClass("enlarged")){
      $(item).css("overflow","inherit").parent().css("overflow","inherit");
      $(item). siblings(".slimScrollBar").css("visibility","hidden");
    }else{
      $(item).css("overflow","hidden").parent().css("overflow","hidden");
      $(item). siblings(".slimScrollBar").css("visibility","visible");
    }
}

var wow = new WOW(
  {
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 50, // distance to the element when triggering the animation (default is 0)
    mobile: false        // trigger animations on mobile devices (true is default)
  }
);
wow.init();



// xx

//应用编辑
// $(function(){
//     var reordered = function($elements) {
//           // Called after the drag and drop ends with the elements in their ending position.
//           var a= []
//               ,data={}
//               ,l = $elements.length;

//           data.id = $elements.prevObject[0].id;

//           for(var i = 0;i<l;i++){
//             a.push($($elements[i]).data("id"))
//           };
//           data.n = a;
//           console.log(data)
//         };

//   $('.gridly').gridly({
//     base: 25, // px 
//     gutter: 5, // px
//     columns: 18,
//     callbacks: {  reordered: reordered }
//   });
//   //删除app
//   $('.gridly').on("click", ".active", function(event) {

//       event.preventDefault();
//       event.stopPropagation();
//       var $ele = $(this).closest('.item');
//       $ele.attr('style','').find('.active').html('+');
//       // $ele.remove();
//       $('.allapp').append($ele)
//       return $('.gridly').gridly('layout');
//   });

//   //添加app
//   $('.allapp').on("click", ".active", function(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     var $ele = $(this).parent();
//     $ele.find('.active').html('×');

//     $('.gridly').append($ele);
//     return $('.gridly').gridly();
//   });
//   return $('.gridly').gridly();

// });

// //滚动加载
// $(document).ready(function(){
//   var range = 50;             //距下边界长度/单位px
//   var lock = true;
//   var maxnum = 6;            //设置加载最多次数
//   var num = 1;
//   var totalheight = 0; 
//   var main = $("#home-2");                     //主体元素
//   $("#tab-content").scroll(function(){
//     //当前面板

    
//      var srollPos = $("#tab-content").scrollTop();

//      totalheight = parseFloat($("#tab-content").height()) + parseFloat(srollPos);
//      console.log($("#scroller").height()-range);
//          console.log(totalheight);
//      if(num != maxnum) {
//         if(!(($("#scroller").height()-range) <= totalheight))return;
//                main.append('<div class="m-b-20 m-r-10 msg-section"><div class="msg-original"><p>原文：這是原文。這是原文這是原文這是原文這是原文這是原文這是原文這是原文這是原文這是原文這是原文這是原文這是原文這是原文這是原文這是原文。</p><div class="msg-detail"><span>制訂人：安倍五十六</span><span>制訂日期：2016-02-30</span><span>计划完成日期：2016-02-30</span></div></div><a class="msg-link-confirm" href="#">确认 </a><a class="msg-link" href="#">查看詳情 &gt;&gt;</a></div>');
//          num++;
//          console.log($("#scroller").height()-range);
//          console.log(totalheight)
//          console.log(num);
//      }else{

//       if(lock){main.append('<div>no more</div>');lock = false;}
//      }
//   });
// });

// // 头部搜索
// $(function () {
//   var lock = true;
//   $(".button-menu-seach .button-menu-mobile").click(function(){
//     if(lock){
//       $(".button-menu-seach").addClass('open')
//       lock=false;
//     }else{
//       $(".button-menu-seach").removeClass('open')
//       lock=true;
//     }
   
//   })
// })
// // 框架
// var tabs;
// var tmpCount = 0;

// $(function () {

//     tabs = $('#tabs').cleverTabs();
//     $(window).bind('resize', function () {
//         tabs.resizePanelContainer();
//     });

//     tabs.add({
//         url: 'index2.html',
//         label: 'baidu'
//     });

//     tabs.add({
//         url: 'index.html',
//         label: 'hao123'
//     });

    
//     var tab = tabs.getTabByUrl('index2.html');
//                     //参数true为锁定，false或不提供值为解锁
//                     tab.setLock(true);
//                     tab.activate();
//     // $('input[type="button"]').button();

//     $('#btnAddMore').click(function () {
//         // tabs.add({
//         //     url: 'tmp.htm?' + tmpCount++,
//         //     label: 'tab' + tmpCount
//         // });
//         location.reload();
//     });


//     $('body').on('click','#wode',function(){
//         alert(1);
//         location.reload();
//     });
// });
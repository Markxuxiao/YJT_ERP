// 点击眼睛按钮是否显示更多
$(function(){
  function toggle (btn) {
    this.unlock = true;
    this.btn = btn;
    this.content = this.btn.siblings(".link-content-link");
    this.btn.click(function(){
      this.onclick();
    }.bind(this));
  }
  toggle.prototype.onclick = function() {
    if (this.unlock){
      this.btn.find('i').removeClass('fa-eye-slash').addClass('fa-eye');
      this.content.addClass('on');
      this.unlock = false;
    }else{
      this.btn.find('i').removeClass('fa-eye').addClass('fa-eye-slash');
      this.content.removeClass('on');
      this.unlock = true;
    }
  };

  $('#bg-primary').find('.more').each(function(){
    var that = $(this);
    new toggle(that);
  });

});


//应用排序
(function(){
  "use strict"

  var resout = []


  var appManage = function (element, options) {
    this.$element  = $(element) 
    this.options   = $.extend({}, appManage.DEFAULTS, options)
    this.$apps = this.$element.find(this.options.$apps)
    this.$allapp = this.$element.find(this.options.$allapp)
    this.$save = this.$element.find(this.options.$save)
    this.int();

  }
  appManage.DEFAULTS = {
    $apps : '.gridly' 
    ,$allapp : '.allapp' 
    ,$save : '.appManageSave'
  }

  appManage.prototype.int=function () {
    var that = this
    this.$apps.gridly({
      base: 25,
      gutter: 5,
      columns: 18,
      callbacks: {  layout: that.retData }
    })

    this.$apps.on("click", ".active", function(e) {
      e.preventDefault()
      e.stopPropagation()
      var ele = $(e.target).parent()
      that.remove(ele)
      return that.$apps.gridly('layout')
    })

    this.$allapp.on("click", ".active", function(e) {
      e.preventDefault()
      e.stopPropagation()
      var ele = $(e.target).parent()
      that.add(ele)
      return that.$apps.gridly('layout')
    })

    this.$save.on('click',function() {
      // setTimeout(function(){ window.parent.iframecallback('refresh_tab') },2000)
      alert(resout +"保存后需要后端处理")
      return console.log(resout)
    })
  }

  appManage.prototype.add=function ($ele) {
    $ele.find('.active').html('×')
    this.$apps.append($ele)
  }

  appManage.prototype.remove=function ($ele) {
    $ele.attr('style','position: relative;left:0;top:0;').find('.active').html('+')
    this.$allapp.append($ele)
  }

  appManage.prototype.retData=function ($elements) {
    var a = []
    var l = $elements.length;

    for(var i = 0;i<l;i++){
      a.push( $($elements[i]).data('appId') )
    }
    resout = a
    // console.log(resout)
  }

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.appManage')
      var options = typeof option == 'object' && option
      if (!data) $this.data('bs.appManage', (data = new appManage(this, options)))
    })
  }


  var old = $.fn.appManage
  $.fn.appManage             = Plugin
  $.fn.appManage.Constructor = appManage
  $.fn.appManage.noConflict = function () {
    $.fn.appManage = old
    return this
  }

})();

$(function(){
  $('#myModal2').appManage()
});
//应用排序end

// (function(){
  
//   var MAX = 6;
//   var $content = $("#tab-content");
//   var $scroller = $("#scroller");
//   var range = 50;             
//   function dropAddData (paneId){
//     this.paneId = paneId;
//     this.unlock = true;
//     this.num = 0;
//     this.bodyHeight =0;
//     this.main = $("#"+paneId);

//   }
//   dropAddData.prototype.add = function(data){
//     var srollPos = $content.scrollTop();

//     this.bodyHeight = parseFloat($content.height()) + parseFloat(srollPos);

//     if(this.num != MAX) {
//         if(!data) return this.unlock = false;
//         if(!(($scroller.height()-range) <= this.bodyHeight))return;
//               this.main.append(data);
//         this.num++;
//     }else{

//      if(this.unlock){this.main.append('<div style="text-align:center">没有更多啦！</div>');this.unlock = false;}
//     }
//   }
  
//   $(function(){
//     var paneObj ={};
//     var $pane = $content.find(".tab-pane");
//     var i = $pane.length-1;
//     for (; i >= 0; i--) {
//       var obj = new dropAddData($pane[i].id);
//       paneObj[obj.paneId] = obj;
//     }

//     $content.scroll(function(){
//       //模拟数据 到时候用后端数据代替
//       var data = '<div class="m-b-20 m-r-10 msg-section"><div class="msg-original"><p>原文：這是原文。模拟数据模拟数据模拟数据模拟数据文這是原文這是原文這是原文這是原文這是原文這是原文這是原文這是原文這是原文這是原文這是原文。</p><div class="msg-detail"><span>制訂人：安倍五十六</span><span>制訂日期：2016-02-30</span><span>计划完成日期：2016-02-30</span></div></div><a class="msg-link-confirm" href="#">确认 </a><a class="msg-link" href="#">查看詳情 &gt;&gt;</a></div>';
      
//       var eleID = $scroller.find('.tab-pane.active')[0].id;
//       paneObj[eleID].add(data);

//     })

//   });

// })();

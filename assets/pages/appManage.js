/**
* 应用图标排序组件
* 依赖：plugins/jquery.gridly/jquery.gridly.js
* 
**/
(function(){
  "use strict"

  var resout = []


  var appManage = function (element, options) {
    this.$element  = $(element) 
    this.options   = $.extend({}, appManage.DEFAULTS, options)
    this.$apps = this.$element.find(this.options.$apps)
    this.$allapp = this.$element.find(this.options.$allapp)
    this.$save = this.$element.find(this.options.$save)
    this.saveCallbacks = this.options.saveCallbacks?this.options.saveCallbacks:null
    this.int();

  }
  appManage.DEFAULTS = {
    $apps : '.gridly' 
    ,$allapp : '.allapp' 
    ,$save : '.appManageSave'
  }

  appManage.prototype.int=function () {
    var that = this
    Sortable.create(sortable, {
      animation: 200
    });

    //删除按钮事件
    this.$apps.on("click", ".active", function(e) {
      e.preventDefault()
      e.stopPropagation()
      var ele = $(e.target).parent()
      that.remove(ele)
      
    })
    //添加按钮事件
    this.$allapp.on("click", ".active", function(e) {
      e.preventDefault()
      e.stopPropagation()
      var ele = $(e.target).parent()
      that.add(ele)
      
    })
    //保存按钮事件
    this.$save.on('click',function() {
      var ele = that.$apps.find('.item');
      that.retData(ele);
      var that_resout = resout;
      
      that.saveCallbacks&&that.saveCallbacks(that_resout)
    })
  }
  //添加app
  appManage.prototype.add=function ($ele) {
    $ele.find('.active').html('×')
    this.$apps.append($ele)
  }
  //删除排序内app
  appManage.prototype.remove=function ($ele) {
    $ele.find('.active').html('+')
    this.$allapp.append($ele)
  }
  //返回排序结果
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

  $('#appManage').appManage({saveCallbacks:function(resout){
    // setTimeout(function(){ window.parent.iframecallback('refresh_tab') },2000)
    alert(resout +"保存后需要后端处理")
  }})
});



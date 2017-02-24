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

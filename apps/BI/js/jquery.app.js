//portlets
!function($) {
    "use strict";
    /**
    Portlet Widget
    */
    var Portlet = function(el) {
    };
    Portlet.prototype.loadingShow = function(){
        var $this = $(this)
        $this.append('<div class="panel-disabled"><div class="loader-1"></div></div>');
        $this.find('.panel-disabled').fadeIn('fast');
    }
    Portlet.prototype.loadingHidden = function($portlet){
        var $this = $(this)
        $this.find('.panel-disabled').remove();
    }
    
    $.fn.Portlet = function(option){
        return this.each(function () {
              var $this = $(this)
              var data  = $this.data('portlet')
              if (!data) $this.data('portlet', (data = new Portlet(this)))
              if (typeof option == 'string') data[option].call($this)
            })
    }

}(window.jQuery);

$('.portlet').Portlet();

$('.slimscrollleft').niceScroll({cursorcolor:"#dcdcdc"});

$(function () {
    $('.open-left').click(function(){
        $(".left.side-menu").toggle("fast");
    })
})








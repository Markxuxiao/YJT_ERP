/**
 * 数据可视化模块 依赖百度echartAPI
 * 使用场景：渲染多种模板的图形，如饼图、柱状图、漏斗等
 */
;(function(){
	var echarts_factory = function(ele,option){
		var that = this;
		this.option = option
        this.Chart = echarts.init(ele);
     	this.load(this.option)
    	 $(window).resize(function() {			
	        that.Chart.resize();
	    });      
     
    }

	echarts_factory.prototype.load = function (option){
		var that = this;
		that.option = option;
    	that.Chart.setOption(that.option);
    }

	$.fn.echarts_factory = function(op){
		return this.each(function () {
              var $this = $(this)
              var data  = $this.data('echarts')
              if (!data) {
              	$this.data('echarts', (data = new echarts_factory(this,op)))
              }else{
				  data.load(op)
              }
        })
	}	
})();

/**
 * 
 * 使用场景：渲染一个带多标记点的地图
 * 初始化：
 * $('#map').baidu_map(data_info);参数格式参考add_marker方法
 * 事件：
 * click_marker.baidu_map 点击标注点
 */
;(function(){
	/**
	 * 地图标记模块 依赖百度地图API
	 * @param  {object} option [配置项]
	 * @param  {object} option.data_info [标注信息]
	 * @param  {string} option.domId [地图div id]
	 */
	function baidu_map (option){
		var point = [option.data_info[0].x,option.data_info[0].y];
		this.op = option;
		this.markers=[];
		this.init(this.op.domId,point);
	}
	baidu_map.prototype.init = function(domId,point) {
		var map;
		this.map = map = new BMap.Map(domId);
		map.centerAndZoom(new BMap.Point(point[0],point[1]), 15);
		map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
		this.add_marker(this.op.data_info)
	};
	/**
	 * 创建标注
	 * @param {object} map 百度地图对象
	 * @param {array} data_info 标注信息
	 * @example[{x:116.417854,y:39.921988,massage:"地址：北京市东城区王府井大街88号乐天银泰百货八层",id:"dd1311"},
				{x:116.406605,y:39.921585,massage:"地址：北京市东城区东华门大街",id:"dd13s11"},
				{x:116.412222,y:39.912345,massage:"地址：北京市东城区正义路甲5号",id:"dd1dd311"}];
	 */
	baidu_map.prototype.add_marker = function(data_info) {
		var that = this;
		var map = that.map;
		var pointArray = [];
		var marker,content;
		for(var i=0;i<data_info.length;i++){
			pointArray[i] = new BMap.Point(data_info[i].x,data_info[i].y);
			marker = new BMap.Marker(pointArray[i]);
			content = data_info[i].massage;
			map.addOverlay(marker);
			that.markers[i] = marker;

			(function(content,data_info){
				marker.addEventListener("click",function(e){
					openInfo(map,content,e)
					$('#'+that.op.domId).trigger($.Event("click_marker.baidu_map"), [data_info]);
				});
			})(content,data_info[i])
		}
		map.setViewport(pointArray);
		function openInfo(map,content,e){
			var opts = {width : 250,height: 80,};
			var p = e.target;
			var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
			var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
			map.openInfoWindow(infoWindow,point); //开启信息窗口
		}
	};

	$.fn.baidu_map = function(data_info){
		return this.each(function () {
	          var $this = $(this)
	          var op = {}
	          op.domId = this.id
	          op.data_info = data_info
	          var data  = $this.data('baidu_map')
	          if (!data) {
	          	$this.data('baidu_map', (data = new baidu_map(op)))
	          }
	        })
	}
	
})();
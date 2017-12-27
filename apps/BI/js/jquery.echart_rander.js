/**
 * 数据可视化模块 依赖百度echartAPI
 * 使用场景：渲染多种模板的图形，如饼图、柱状图、漏斗等
 * 各种图形的data接口查看Default配置
 * @todo 只写了柱状图data接口
 */
;(function(){
	var echarts_factory = function(ele,type,data){
		var that = this;
		var Colors = ['#5793f3', '#d14a61', '#675bba'];
		var Default = {
			type : {
				// 柱状图
				bar_1 : {
					option:{
						color: ['#3398DB'],
						tooltip: {
							trigger: 'axis',
							axisPointer: {
								type: 'shadow'
							}
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
						},
						xAxis: [{
							type: 'category',
							data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
							axisTick: {
								alignWithLabel: true
							}
						}],
						yAxis: [{
							type: 'value'
						}],
						series: [{
							type: 'bar',
							barWidth: '60%',
							data: [10, 52, 200, 334, 390, 330, 220]
						}]
					},
					/**
					 * @param {array} data.x x轴显示数据
					 * @param {array} data.y y轴显示数据
					 */
					setOption:function(op,data){
						var option = $.extend({},op)
						option.xAxis[0].data = data.x
						option.series[0].data = data.y
						return option
					}
				},
				// 柱状图横向
				bar_2 : {
					option:{
					    tooltip: {
					        trigger: 'axis',
					        axisPointer: {
					            type: 'shadow'
					        }
					    },
					    legend: {
					        data: ['2011年', '2012年']
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    xAxis: {
					        type: 'value',
					        boundaryGap: [0, 0.01]
					    },
					    yAxis: {
					        type: 'category',
					        data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
					    },
					    series: [
					        {
					            type: 'bar',
					            data: [19325, 23438, 31000, 121594, 134141, 681807]
					        }
					    ]
					},
					/**
					 * @param {array} data.x x轴显示数据
					 * @param {array} data.y y轴显示数据
					 */
					setOption:function(op,data){
						var option = $.extend({},op)
						option.yAxis.data = data.y
						option.series[0].data = data.x
						return option
					}
				},
				// 折线图1
				line_1 : {
					option:{			
						tooltip: {
							trigger: 'axis'
						},
						legend: {
							data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
						},			
						xAxis: {
							type: 'category',
							boundaryGap: false,
							data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
						},
						yAxis: {
							type: 'value'
						},
						series: [{
								name: '邮件营销',
								type: 'line',
								stack: '总量',
								data: [120, 132, 101, 134, 90, 230, 210]
							},
							{
								name: '联盟广告',
								type: 'line',
								stack: '总量',
								data: [220, 182, 191, 234, 290, 330, 310]
							},
							{
								name: '视频广告',
								type: 'line',
								stack: '总量',
								data: [150, 232, 201, 154, 190, 330, 410]
							},
							{
								name: '直接访问',
								type: 'line',
								stack: '总量',
								data: [320, 332, 301, 334, 390, 330, 320]
							},
							{
								name: '搜索引擎',
								type: 'line',
								stack: '总量',
								data: [820, 932, 901, 934, 1290, 1330, 1320]
							}
						]
					},
					setOption:function(op,data){
						var option = $.extend({},op)
						return option
					}
				},
				// 折线图2
				line_2 : {
					option:{
						color: Colors,

						tooltip: {
							trigger: 'none',
							axisPointer: {
								type: 'cross'
							}
						},
						legend: {
							data: ['2015 降水量', '2016 降水量']
						},
						grid: {
							top: 70,
							bottom: 50
						},
						xAxis: [{
								type: 'category',
								axisTick: {
									alignWithLabel: true
								},
								axisLine: {
									onZero: false,
									lineStyle: {
										color: Colors[1]
									}
								},
								axisPointer: {
									label: {
										formatter: function(params) {
											return '降水量  ' + params.value +
												(params.seriesData.length ? '：' + params.seriesData[0].data : '');
										}
									}
								},
								data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
							},
							{
								type: 'category',
								axisTick: {
									alignWithLabel: true
								},
								axisLine: {
									onZero: false,
									lineStyle: {
										color: Colors[0]
									}
								},
								axisPointer: {
									label: {
										formatter: function(params) {
											return '降水量  ' + params.value +
												(params.seriesData.length ? '：' + params.seriesData[0].data : '');
										}
									}
								},
								data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
							}
						],
						yAxis: [{
							type: 'value'
						}],
						series: [{
								name: '2015 降水量',
								type: 'line',
								xAxisIndex: 1,
								smooth: true,
								data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
							},
							{
								name: '2016 降水量',
								type: 'line',
								smooth: true,
								data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
							}
						]
					},
					setOption:function(op,data){
						var option = $.extend({},op)
						return option
					}
				},
				// 饼图（扇形）
				pie_1 : {
					option:{
						tooltip: {
							trigger: 'item',
							formatter: "{b} : {c} ({d}%)"
						},
						legend: {
							top: 0,
							left: 'center',
							data: ['达成率', '未达成率']
						},
						series: [{
							name: '任务达成情况',
							type: 'pie',
							radius: '70%',
							center: ['50%', '50%'],
							color: ['#CDEA57', '#0CB2EC'],
							label: {
								normal: {
									show: true,
									position: 'inside',
									formatter: '{d}%',
									fontSize: 18
								}
							},
							data: [{
									value: 59,
									name: '达成率'
								},
								{
									value: 41,
									name: '未达成率'
								}
							],
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							}
						}]
					},
					setOption:function(op,data){
						var option = $.extend({},op)
						return option
					}
				},
				// 饼图（环形）
				pie_2 : {
					option:{
					    tooltip: {
					        trigger: 'item',
					        formatter: "{a} <br/>{b}: {c} ({d}%)"
					    },
					    legend: {
					       	top:0,
					        left:'center',
					        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
					    },
					    series: [
					        {
					            name:'访问来源',
					            type:'pie',
					            radius: ['50%', '70%'],
					            avoidLabelOverlap: false,
					            label: {
					                normal: {
					                    show: false,
					                    position: 'center'
					                },
					                emphasis: {
					                    show: true,
					                    textStyle: {
					                        fontSize: '18',
					                        fontWeight: 'bold'
					                    }
					                }
					            },
					            labelLine: {
					                normal: {
					                    show: false
					                }
					            },
					            data:[
					                {value:335, name:'直接访问'},
					                {value:310, name:'邮件营销'},
					                {value:234, name:'联盟广告'},
					                {value:135, name:'视频广告'},
					                {value:1548, name:'搜索引擎'}
					            ]
					        }
					    ]
					},
					setOption:function(op,data){
						var option = $.extend({},op)
						return option
					}
				},
				// 饼图（环形进度条）
				pie_3 : {
					option:{
					    series: [{
					        name: '目标完成度',
					        type: 'pie',
					        radius: ['65%', '70%'],
					        avoidLabelOverlap: false,
					        hoverAnimation: false,
					        startAngle: 90,		        
					        labelLine: {
					            normal: {
					                show: false
					            }
					        },
					        data: [{
					            value: 4000,
					            name: '目标完成度',
					            label: {
						            normal: {
						            	formatter: [
								            '{a|{d}%}',
								            '{b|目标值： 6000}',
								            '{b|完成值： 4000}'
								        ].join('\n'),
								        rich:{
								        	a:{
								        		color:'#33CC66',
								        		fontSize: 35,
								        		lineHeight:60,					        		
								        		fontFamily: 'Microsoft YaHei'					        		
								        	},
								        	b:{
								        		color:'#666',
								        		fontSize: 14,
								        		lineHeight:20,
								        	}
								        },
						                show: true,
						                position: 'center'	  
						            }
						        },
					            itemStyle: {
					                normal: {
					                    color:'#33CC66'		                    
					                }
					            }		            	            
					        }, {
					            value: 2000,
					            itemStyle: {
					                normal: {
					                    color: '#333',
					                    shadowColor:'#333',
					                    opacity: 0.1
					                }
					            }
					        } ]
					    }]
					},
					setOption:function(op,data){
						var option = $.extend({},op)
						return option
					}
				},
				// 仪表盘
				gauge_1 : {
					option:{
						tooltip: {
							formatter: "{a} <br/>{b} : {c}%"
						},
						series: [{
							name: '毛利率',
							type: 'gauge',
							startAngle: 180,
							endAngle: 0,
							radius: '80%',
							min: 0,
							max: 100,
							axisLine: {
								lineStyle: {
									color: [
										[0.2, '#FF5051'],
										[0.8, '#FFDC5B'],
										[1, '#45B07A']
									],
									width: 40
								}
							},
							splitLine: {
								show: false
							},
							axisTick: {
								show: false
							},
							axisLabel: {
								show: true,
								distance: 13,
								formatter: function(e) {
									switch(e + '') {
										case '0':
											return '0%';
										case '100':
											return '100%';
										default:
											return '';
									}
								},
								textStyle: {
									fontSize: 15,
								}
							},
							pointer: {
								length: '68%',
								width: 3
							},

							title: {
								show: false,
							},
							detail: {
								formatter: '{value}%'

							},
							data: [{
								value: '90',
								name: name
							}]
						}]
					},
					setOption:function(op,data){
						var option = $.extend({},op)
						return option
					}
				},
				// 漏斗图
				funnel_1 : {
					option:{		    
					    tooltip: {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c}%"
					    },		   
					    legend: {
					        data: ['展现','点击','访问','咨询','订单']
					    },
					    calculable: true,
					    series: [
					        {
					            name:'漏斗图',
					            type:'funnel',
					            left: '10%',
					            top: 60,		            
					            bottom: 60,
					            width: '80%',		          
					            min: 0,
					            max: 100,
					            minSize: 0,
					            maxSize: 250,
					            sort: 'descending',
					            gap: 2,
					            label: {
					                normal: {
					                    show: true,
					                    position: 'inside'
					                },
					                emphasis: {
					                    textStyle: {
					                        fontSize: 20
					                    }
					                }
					            },
					            labelLine: {
					                normal: {
					                    length: 10,
					                    lineStyle: {
					                        width: 1,
					                        type: 'solid'
					                    }
					                }
					            },
					            itemStyle: {
					                normal: {
					                    borderColor: '#fff',
					                    borderWidth: 1
					                }
					            },
					            data: [
					                {value: 60, name: '访问'},
					                {value: 40, name: '咨询'},
					                {value: 20, name: '订单'},
					                {value: 80, name: '点击'},
					                {value: 100, name: '展现'}
					            ]
					        }
					    ]
					},
					setOption:function(op,data){
						var option = $.extend({},op)
						return option
					}
				}
			}
		}
		this.type = type;
		this.data = data;
		this.config = $.extend({},Default.type[that.type]);
		this.option = this.config.option;
		this.setOption = this.config.setOption;
        this.Chart = echarts.init(ele);
     	this.load(data)
    	 $(window).resize(function() {			
	        that.Chart.resize();
	    });      
     
    }

    
    
    echarts_factory.prototype._setOptionData = function(data){
    	var op = this.setOption(this.option,data)
    	this.option = op;
    }
    echarts_factory.prototype.load = function(data){
    	var that = this;
    	that._setOptionData(data)
    	that.Chart.setOption(that.option);
    }


	$.fn.echarts_factory = function(op){
		return this.each(function () {
              var $this = $(this)
              var data  = $this.data('echarts')
              if (!data) {
              	$this.data('echarts', (data = new echarts_factory(this,op.type,op.data)))
              }else{
              	data.load(op.data)
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
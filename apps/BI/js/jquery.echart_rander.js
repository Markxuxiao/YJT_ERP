(function(){
	var colors1 = ['#ea7100', '#0CB2EC', '#675bba'];
	var colors2 = ['#5793f3', '#d14a61', '#675bba'];	
	var echarts_option = {
		// 柱状图
		option1 : {
			color: ['#3398DB'],
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
				name: '直接访问',
				type: 'bar',
				barWidth: '60%',
				data: [10, 52, 200, 334, 390, 330, 220]
			}]
		},
		// 柱状图+折线图
		option2 : {
			color: colors1,
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross'
				}
			},
			grid: {
				right: '20%'
			},			
			legend: {
				data: ['目标销售金额', '实际销售金额', '完成率'],
				bottom: 0,
			},
			xAxis: [{
				type: 'category',
				axisTick: {
					alignWithLabel: true
				},
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			}],
			yAxis: [{
					type: 'value',
					name: '单位：万元',
					min: 0,
					max: 250,	
					axisLabel: {
		                formatter: '{value}'
		            }
				},
				{
					type: 'value',
					name: '完成率',
					min: 0,
					max: 110,	
					offset:10,
					axisLine: {
						lineStyle: {
							color: colors1[2]
						}
					},
					axisLabel: {
						formatter: '{value}%'
					},

				}
			],
			series: [{
					name: '目标销售金额',
					type: 'bar',
					data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
				},
				{
					name: '实际销售金额',
					type: 'bar',					
					data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
				},
				{
					name: '完成率',
					type: 'line',
					yAxisIndex: 1,
					data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
				}
			]
		},
		// 折线图1
		option3 : {			
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
		// 折线图2
		option4 : {
			color: colors2,

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
							color: colors2[1]
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
							color: colors2[0]
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
		
		// 饼图（扇形）
		option5 : {
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
		// 饼图（环形）
		option6 : {
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
		// 饼图（环形进度条）
		option7 : {
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
		// 仪表盘
		option8 : {
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
		// 漏斗图
		option9 : {		    
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
		}
	}

	var echarts_factory = function(ele,opid,data){
		var that = this;
        this.Chart = echarts.init(ele);
        this.opid = opid;
     	this.load(data)
    	 $(window).resize(function() {			
	        that.Chart.resize();
	    });      
     
    }

    echarts_factory.prototype.load = function(data){
    	var that = this;
    	var option = echarts_option[that.opid];
    	that.Chart.setOption(option);
    }


	$.fn.echarts_factory = function(op){
		return this.each(function () {
              var $this = $(this)
              var data  = $this.data('echarts')
              if (!data) {
              	$this.data('echarts', (data = new echarts_factory(this,op.opid,op.data)))
              }else{
              	data.load(op.data)
              }
            })
	}
	
	
})();

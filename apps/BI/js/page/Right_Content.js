
$(function(){
	//表格渲染
	mini.parse();
    var grid = mini.get("grid1");
	grid.load();
	
	var Colors1 = ['#CDEA57', '#0CB2EC', '#675bba', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
	var Colors = ['#5793f3', '#d14a61', '#675bba', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];



	var bar_1 = {
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
	};

	var bar_2 = {
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
			data: ['sf', 'fs', 'dd', 'dsd']
		},
		series: [
			{
				type: 'bar',
				data: [33, 44, 55, 34]
			}
		]
	};

	var line_1 = {
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
	};
	var line_2 = {
		color: ['#5793f3', '#d14a61', '#675bba'],
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
			data: ['蒸发量', '降水量', '平均温度']
		},
		xAxis: [
			{
				type: 'category',
				axisTick: {
					alignWithLabel: true
				},
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '蒸发量',
				min: 0,
				max: 250,
				position: 'right',
				axisLine: {
					lineStyle: {
						color: Colors[0]
					}
				},
				axisLabel: {
					formatter: '{value} ml'
				}
			},
			{
				type: 'value',
				name: '降水量',
				min: 0,
				max: 250,
				position: 'right',
				offset: 50,
				axisLine: {
					lineStyle: {
						color: Colors[1]
					}
				},
				axisLabel: {
					formatter: '{value} ml'
				}
			},
			{
				type: 'value',
				name: '温度',
				min: 0,
				max: 25,
				position: 'left',
				axisLine: {
					lineStyle: {
						color: Colors[2]
					}
				},
				axisLabel: {
					formatter: '{value} °C'
				}
			}
		],
		series: [
			{
				name: '蒸发量',
				type: 'bar',
				data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			},
			{
				name: '降水量',
				type: 'bar',
				yAxisIndex: 1,
				data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			},
			{
				name: '平均温度',
				type: 'line',
				yAxisIndex: 2,
				data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
			}
		]
	};
	var line_3 = { 
		color: ["#5793f3", "#d14a61", "#675bba"],
		tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
		// grid: { right: "20%" },
		legend: { data: ["访问量", "访问人数"] },
		xAxis: [{ type: "category", axisTick: { alignWithLabel: true },
		data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"] }],
		yAxis: [
			{ type: "value", name: "访问量",position: "right"}, 
			{ type: "value", name: "访问人数", position: "left"}
		], 
		series: [
			{ name: "访问量", type: "bar", yAxisIndex: 0,data: [4233, 4545, 3566, 0, 0,0,0,0,0,0,0,0] }, 
			{ name: "访问人数", type: "line", yAxisIndex: 1, data: [344, 356, 266, 0, 0,0,0,0,0,0,0,0] }
		]
	};
	var pie_1 = {
		title:{
			subtext:"这里是总数100",
			left:'center',
			bottom:0,
			subtextStyle:{
				fontSize:14,
				fontWeight:'bold',
				color:'orange'
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: "{b} : {c} ({d}%)"
		},
		legend: {
			top: 10,
			left: 'center',
			data: ['adf', 'sf']
		},
		series: [{
			name: '任务达成情况',
			type: 'pie',
			radius: '70%',
			center: ['50%', '50%'],
			color: Colors1,
			label: {
				normal: {
					show: true,
					position: 'inside',
					formatter: '{d}%',
					fontSize: 18
				}
			},
			data: [
				{value: 59,name: 'adf'},
				{value: 41,name: 'sf'}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};

	var pie_2 = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			top: 0,
			left: 'center',
			data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
		},
		series: [
			{
				name: '访问来源',
				type: 'pie',
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
				data: [
					{ value: 335, name: '直接访问' },
					{ value: 310, name: '邮件营销' },
					{ value: 234, name: '联盟广告' },
					{ value: 135, name: '视频广告' },
					{ value: 1548, name: '搜索引擎' }
				]
			}
		]
	};
	var pie_3 = {
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
							'{a|180%}',
							'{b|目标值： 6000}',
							'{b|完成值： 14000}'
						].join('\n'),
						rich: {
							a: {
								color: '#33CC66',
								fontSize: 35,
								lineHeight: 60,
								fontFamily: 'Microsoft YaHei'
							},
							b: {
								color: '#666',
								fontSize: 14,
								lineHeight: 20,
							}
						},
						show: true,
						position: 'center'
					}
				},
				itemStyle: {
					normal: {
						color: '#33CC66'
					}
				}
			}, {
				value: 0,
				itemStyle: {
					normal: {
						color: '#333',
						shadowColor: '#333',
						opacity: 0.1
					}
				}
			}]
		}]
	};
	var gauge_1 = {
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
				formatter: function (e) {
					switch (e + '') {
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
	};
	var funnel_1 = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}%"
		},
		legend: {
			data: ['展现', '点击', '访问', '咨询', '订单']
		},
		calculable: true,
		series: [
			{
				name: '漏斗图',
				type: 'funnel',
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
					{ value: 60, name: '访问' },
					{ value: 40, name: '咨询' },
					{ value: 20, name: '订单' },
					{ value: 80, name: '点击' },
					{ value: 100, name: '展现' }
				]
			}
		]
	};

	$('#barChart1').echarts_factory(bar_1);
	$('#barChart1').data('echarts').Chart.on('click',function(params){console.log(params)})
	
	$('#barChart2').echarts_factory(bar_2);
	$('#barChart2').data('echarts').Chart.on('click',function(params){console.log(params)})

	$('#lineChart1').echarts_factory(line_1);
	$('#lineChart1').data('echarts').Chart.on('click',function(params){console.log(params)})

	$('#lineChart2').echarts_factory(line_2);
	$("#lineChart3").echarts_factory(line_3);
	$('#pieChart1').echarts_factory(pie_1);
	$('#pieChart2').echarts_factory(pie_2);
	$('#pieChart3').echarts_factory(pie_3);
	$('#gaugeChart').echarts_factory(gauge_1);
	$('#funnelChart').echarts_factory(funnel_1);
});


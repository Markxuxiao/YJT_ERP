$(function(){
		
	var bar_1_1 = {
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
			data: ['第1季度', '第2季度', '第3季度', '第4季度'],
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
			data: [33, 44, 55, 23]
		}]
	};

	var bar_1_2 = {
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
			data: ['第1季度', '第2季度', '第3季度', '第4季度'],
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
			data: [33, 22, 33, 23]
		}]
	};

	var bar_1_3 = {
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
			data: ['第1季度', '第2季度', '第3季度', '第4季度'],
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
			data: [11, 33, 42, 23]
		}]
	};

	var bar_2_1 = {
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

	var bar_2_2 = {
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
				data: [33, 33, 66, 34]
			}
		]
	};

	var bar_2_3 = {
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
				data: [33, 44, 55, 99]
			}
		]
	};


	var pie_1_1 = {
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
				name: 'adf'
			},
			{
				value: 21,
				name: 'sf'
			},
			{
				value: 20,
				name: 'sdff'
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
	};

	var pie_1_2 = {
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
				name: 'adf'
			},
			{
				value: 33,
				name: 'sf'
			},
			{
				value: 20,
				name: 'sdff'
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
	};

	var pie_1_3 = {
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
			label: {
				normal: {
					show: true,
					position: 'inside',
					formatter: '{d}%',
					fontSize: 18
				}
			},
			data: [{
				value: 69,
				name: 'adf'
			},
			{
				value: 21,
				name: 'sf'
			},
			{
				value: 20,
				name: 'sdff'
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
	};

	var pie_2_1 = {
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
					{ value: 554, name: '联盟广告' },
					{ value: 135, name: '视频广告' },
					{ value: 1548, name: '搜索引擎' }
				]
			}
		]
	};

	var pie_2_2 = {
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
					{ value: 225, name: '直接访问' },
					{ value: 310, name: '邮件营销' },
					{ value: 134, name: '联盟广告' },
					{ value: 135, name: '视频广告' },
					{ value: 1548, name: '搜索引擎' }
				]
			}
		]
	};

	var pie_2_3 = {
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
					{ value: 48, name: '搜索引擎' }
				]
			}
		]
	};




	var mock_data_ecart1 = [
		{ 'id': '0', 'data': bar_1_1 },
		{ 'id': '1', 'data': bar_1_2 },
		{ 'id': '2', 'data': bar_1_3 }
	];

	var mock_data_ecart2 = [
		{ 'id': '0', 'data': bar_2_1 },
		{ 'id': '1', 'data': bar_2_2 },
		{ 'id': '2', 'data': bar_2_3 }
	];
	var mock_data_ecart3 = [
		{ 'id': '0', 'data': pie_1_1 },
		{ 'id': '1', 'data': pie_1_2 },
		{ 'id': '2', 'data': pie_1_3 }
	];
	var mock_data_ecart4 = [
		{ 'id': '0', 'data': pie_2_1 },
		{ 'id': '1', 'data': pie_2_2 },
		{ 'id': '2', 'data': pie_2_3 }
	];






	function rander_echart(id){
		//这里的data应该根据id动态取
		var bar_1 = mock_data_ecart1[parseInt(id)].data;
		var bar_2 = mock_data_ecart2[parseInt(id)].data;
		var pie_1 = mock_data_ecart3[parseInt(id)].data;
		var pie_2 = mock_data_ecart4[parseInt(id)].data;

		$('#barChart1').echarts_factory(bar_1);
		$('#barChart2').echarts_factory(bar_2);
		$('#pieChart1').echarts_factory(pie_1);
		$('#pieChart2').echarts_factory(pie_2);
	}

	(function(){
		//表格模块
		mini.parse();
		var grid = mini.get("grid1");
		grid.load();
		grid.on('selectionchanged',function(e) {
		    var grid = e.sender;
		    var record = grid.getSelected();
		    if (record) {
		    	console.log(record)
		    	rander_echart(record._id-1)
		    }
		})

	})();


	rander_echart(1)

});
$(function(){


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

	var bar_2 = {
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

	var bar_3 = {
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

	var mock_data_ecart = [
		{ 'id': '0', 'data': bar_1 },
		{ 'id': '1', 'data': bar_2 },
		{ 'id': '2', 'data': bar_3 }
	];


	function rander_echart(id) {
		//这里的data应该根据id动态取
		var op = mock_data_ecart[parseInt(id)]
		$('#barChart1').echarts_factory(op.data);
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


		var grid2 = mini.get("grid2");
		grid2.load();

	})();
	

	rander_echart(0)
	$('#barChart1').data('echarts').Chart.on('click', function (params) {
	    alert(params.name +":"+ params.value);
	    //todo reload grid2
	});
});
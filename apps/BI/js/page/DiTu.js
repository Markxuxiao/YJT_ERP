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
		{'id':'0','data':bar_1},
		{ 'id': '1', 'data':bar_2},
		{ 'id': '2', 'data':bar_3}
	];








	function rander_echart(id){
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

	})();
	(function(){
		//echart模块
		$('#barChart1').echarts_factory(mock_data_ecart[0].data);
		$('#barChart1').data('echarts').Chart.on('click',function(params){console.log(params)})

	})();
	(function(){
		//地图模块
		var data = [{x:116.417854,y:39.921988,massage:"富力天朗明居",id:"0"},
					{x:116.406605,y:39.921585,massage:"富力半岛花园",id:"1"},
					{x:116.412222,y:39.912345,massage:"棠德花园",id:"2"}];
		$('#Jbaiduditu').baidu_map(data)
		$('#Jbaiduditu').on('click_marker.baidu_map',function(e,makerData){
			console.log(makerData)
			rander_echart(makerData.id)
		})
	})();
	
	

});
$(function(){
	var mock_data_ecart = [
		{'id':'0','x':['深圳大世界店','深圳国安居店','深圳红星店','深圳家装部','深圳索菲亚店','深圳综合店'],'y':[291683,15680,97867.5,315369,246013.1,8762.2]},
		{'id':'1','x':['第1季度','第2季度','第3季度','第4季度'],'y':[23,24,53,33]},
		{'id':'2','x':['第1季度','第2季度','第3季度','第4季度'],'y':[34,34,65,33]}
	];

	var mock_data_ecart2 = [
		{'id':'0','y':['第1季度','第2季度','第3季度','第4季度'],'x':[33,44,55,23]},
		{'id':'1','y':['第1季度','第2季度','第3季度','第4季度'],'x':[23,24,53,33]},
		{'id':'2','y':['第1季度','第2季度','第3季度','第4季度'],'x':[34,34,65,33]}
	];

	function rander_echart(id){
		//这里的data应该根据id动态取
		var data = mock_data_ecart[parseInt(id)]
		var data2 = mock_data_ecart2[parseInt(id)]
		$('#barChart1').echarts_factory({'type':'bar_1','data':data});
		$('#barChart2').echarts_factory({'type':'bar_2','data':data2});
		$('#pieChart1').echarts_factory({'type':'pie_1','data':''});
		$('#pieChart2').echarts_factory({'type':'pie_2','data':''});
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

$(function(){
	//表格渲染
	mini.parse();
    var grid = mini.get("grid1");
    grid.load();
	
	
	$('#barChart1').echarts_factory({'opid':'option1','data':''});
	$('#barChart2').echarts_factory({'opid':'option2','data':''});
	$('#lineChart1').echarts_factory({'opid':'option3','data':''});
	$('#lineChart2').echarts_factory({'opid':'option4','data':''});
	$('#pieChart1').echarts_factory({'opid':'option5','data':''});
	$('#pieChart2').echarts_factory({'opid':'option6','data':''});
	$('#pieChart3').echarts_factory({'opid':'option7','data':''});
	$('#gaugeChart').echarts_factory({'opid':'option8','data':''});
	$('#funnelChart').echarts_factory({'opid':'option9','data':''});
});


//测试portlet加载
$('[data-toggle="reload"]').click(function(){
   $('.portlet').Portlet('loadingShow') 
})
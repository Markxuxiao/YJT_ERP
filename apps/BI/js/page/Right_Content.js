
$(function(){
	//表格渲染
	mini.parse();
    var grid = mini.get("grid1");
    grid.load();
	
	
	$('#barChart1').echarts_factory({'type':'bar_1','data':{'x':['sf','fs','dd','dsd'],'y':[33,44,55,34]}});
	$('#barChart1').data('echarts').Chart.on('click',function(params){console.log(params)})
	
	$('#barChart2').echarts_factory({'type':'bar_2','data':{'x':[33,44,55,34],'y':['sf','fs','dd','dsd']}});
	$('#barChart2').data('echarts').Chart.on('click',function(params){console.log(params)})

	$('#lineChart1').echarts_factory({'type':'line_1','data':''});
	$('#lineChart1').data('echarts').Chart.on('click',function(params){console.log(params)})

	$('#lineChart2').echarts_factory({'type':'line_2','data':''});
	$('#pieChart1').echarts_factory({'type':'pie_1','data':{'x':['sf','fs','dd'],'y':[33,44,55]}});
	$('#pieChart2').echarts_factory({'type':'pie_2','data':{'x':['sf','fs','dd'],'y':[33,44,55]}});
	$('#pieChart3').echarts_factory({'type':'pie_3','data':''});
	$('#gaugeChart').echarts_factory({'type':'gauge_1','data':''});
	$('#funnelChart').echarts_factory({'type':'funnel_1','data':''});
});


//测试portlet加载
$('[data-toggle="reload"]').click(function(){
   $('.portlet').Portlet('loadingShow') 
})
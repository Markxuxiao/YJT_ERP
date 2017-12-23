$(function(){
	//表格渲染
	mini.parse();
    var grid = mini.get("grid1");
    grid.load();
    grid.on('selectionchanged',onSelectionChanged)

    /**
     * 渲染选中数据
     * @param  {json} data   grid.getSelected()获取的json
     * @param  {array} columns   mini DataGrid columns 对象 ;
     */
    function randerSelected(el,data,columns){
        var dateFormat,key;
    	var html = "",i = 0,l = columns.length;
    	while(i < l){
            key = columns[i]["header"];
            if(typeof columns[i]['dateFormat'] !== 'undefined'){
                dateFormat = mini.formatDate ( data[key], columns[i]['dateFormat'] )
            }else{
                dateFormat = data[key];
            }
    		html +='<div class="col-xs-4"><span class="tbkey">'+key+'</span><span class="tbvalue">'+ dateFormat +'</span></div>'
            i++;
    	};
    	el.innerHTML=html;
    }

    function onSelectionChanged(e) {
            var grid = e.sender;
            var record = grid.getSelected();
            if (record) {
            	var el = document.getElementById('Jtbbox')
            	randerSelected(el,record,grid.columns)
            }
        }
});
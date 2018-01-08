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


     //树渲染
    var list = [
        { id: "base", text: "Base" },            
        { id: "ajax", text: "Ajax", pid: "base" },
        { id: "json", text: "JSON", pid: "base" },
        { id: "date", text: "Date", pid: "base" },
        { id: "control", text: "Control", pid: "base" },
        { id: "forms", text: "Forms", pid: "base" },
        { id: "button", text: "Button", pid: "forms" },
        { id: "listbox", text: "ListBox", pid: "forms" },
        { id: "checkboxlist", text: "CheckBoxList", pid: "forms" },
        { id: "lists", text: "Lists" },
        { id: "datagrid", text: "DataGrid", pid: "lists" },
        { id: "tree", text: "Tree", pid: "lists" },
        { id: "treegrid", text: "TreeGrid ", pid: "lists" }
    ];
    var tree3 = mini.get("tree3");
    tree3.loadList(list, "id", "pid");
    tree3.on('nodeselect',onNodeselect)

    function onNodeselect(e){
        alert(e.selected.id)
    }
    ///////////////////////////////////
});
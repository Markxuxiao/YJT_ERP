<div class="portlet"><!-- /primary heading -->
  <div class="portlet-heading">
    <h3 class="portlet-title text-dark text-uppercase">
      内树型展示
    </h3>
    <div class="clearfix"></div>
  </div>
  <div class="panel-collapse collapse in">
    <div class="portlet-body" style="height: 500px;">
      <div id="treegrid1" class="mini-treegrid" style="width:100%;height:100%;"     
          url="./data/tableTree.txt" showTreeIcon="true" 
          treeColumn="taskname" idField="UID" parentField="ParentTaskUID" resultAsTree="false"  
          onselectionchanged="table_onselectionchanged"
          allowResize="true" expandOnLoad="true"
      >
          <div property="columns">
              <div type="indexcolumn"></div>
              <div name="taskname" field="Name" width="160" >任务名称</div>
              <div field="PercentComplete" width="80">进度</div>
              <div field="Duration" width="60" align="right">工期</div>
              <div field="Start" width="80" dateFormat="yyyy-MM-dd">开始日期</div>
              <div field="Finish" width="80" dateFormat="yyyy-MM-dd">完成日期</div>                   
          </div>
      </div>
    </div>
  </div>
</div>
<script>
function  table_onselectionchanged (e){
  var grid = e.sender;
  var record = grid.getSelected();
  alert(record.UID)
}
</script>
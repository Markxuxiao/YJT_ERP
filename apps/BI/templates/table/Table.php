<div class="portlet"><!-- /primary heading -->
  <div class="portlet-heading">
    <h3 class="portlet-title text-dark text-uppercase">
      Projects
    </h3>
    <div class="portlet-widgets">
      <a href="javascript:;" data-toggle="reload"><i class="ion-refresh"></i></a>
      <span class="divider"></span>
      <a data-toggle="collapse" data-parent="#accordion1" href="#portlet2"><i class="ion-minus-round"></i></a>
      <span class="divider"></span>
      <a href="#" data-toggle="remove"><i class="ion-close-round"></i></a>
    </div>
    <div class="clearfix"></div>
  </div>
  <div id="portlet2" class="panel-collapse collapse in">
    <div class="portlet-body">
      <div id="grid1" class="mini-datagrid"  style="width:100%;height:350px;"
        url="./data/AjaxDataGridcx_allfield.txt?method=SearchEmployees"
        idField="SYSTEM_ID"
        sizeList="[20,50,100,200,500,900]"
        pagesize="20" >
        <div property="columns"> 
          <div name="日期" field="日期"  headerAlign="center" align="center"   width="85px"  visible="true"  dateFormat="yyyy-MM-dd" autoEscape="false" allowSort="true">日期</div>
          <div name="单号" field="单号"  headerAlign="center"   width="130"  visible="true"   autoEscape="false" allowSort="true">单号</div>
          <div name="工作类别" field="工作类别"  headerAlign="center"   width="110"  visible="true"   autoEscape="false" allowSort="true">工作类别</div>
          <div name="负责人" field="负责人"  headerAlign="center"   width="110"  visible="true"   autoEscape="false" allowSort="true">负责人</div>
          <div name="部门" field="部门"  headerAlign="center"   width="110"  visible="true"   autoEscape="false" allowSort="true">部门</div>
          <div name="出勤记录审批" field="出勤记录审批"  headerAlign="center"   width="110"  visible="true"   autoEscape="false" allowSort="true">出勤记录审批</div>
          <div name="审批类别" field="审批类别"  headerAlign="center"   width="110"  visible="true"   autoEscape="false" allowSort="true">审批类别</div>
          <div name="工作量" field="工作量"  headerAlign="center"   width="110"  visible="true"   autoEscape="false" allowSort="true">工作量</div>
          <div name="困难指数" field="困难指数"  headerAlign="center"   width="110"  visible="true"   autoEscape="false" allowSort="true">困难指数</div>
          <div name="迷茫指数" field="迷茫指数"  headerAlign="center"   width="110"  visible="true"   autoEscape="false" allowSort="true">迷茫指数</div>
          <div name="郁闷指数" field="郁闷指数"  headerAlign="center"   width="110"  visible="true"   autoEscape="false" allowSort="true">郁闷指数</div>
          <div name="沟通扣分原因" field="沟通扣分原因"  headerAlign="center"   width="110"  visible="true"   autoEscape="false" allowSort="true">沟通扣分原因</div>
          <div name="合计得分" field="合计得分"  headerAlign="center"  width="110"  visible="true"  align="right"summaryType="sum" autoEscape="false" allowSort="true">合计得分</div>
        </div>
      </div>
    </div>
  </div>
</div>
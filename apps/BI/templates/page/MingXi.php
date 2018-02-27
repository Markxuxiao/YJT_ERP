<div class="content-page">
  <!-- Start content -->
  <div class="content">
    <div class="container">
      <!-- 表格 -->
      <div class="row" style="position: relative;overflow:auto;">
        <div class="col-xs-12" style="min-width:750px;">
          <div class="card-box" style="position: absolute;top:0;left:10px;width:200px;min-height:544px;overflow: auto;">
            <ul id="tree3" class="mini-tree" expandOnLoad="0" showTreeIcon="false" textField="text" idField="id" >        
            </ul>
          </div>
          <div style="padding-left:220px;width: 100%;">
            <div class="row">
              <div class="col-xs-12">
                <div class="portlet">
                  <div class="portlet-heading">
                      <h3 class="portlet-title text-uppercase color-orange">
                          表格控件
                      </h3>
                      <div class="pull-right">
                        <a class="mini-button mini-button-plain" href="javascript:void(0)"><span class="mini-button-text  mini-button-icon-text "><span class="mini-button-icon mini-iconfont icon-download" style=""></span>导出EXCEL文件</span></a>
                        <a class="mini-button mini-menubutton mini-button-plain" href="javascript:void(0)"><span class="mini-button-text ">更多操作</span><span class="mini-button-allow mini-button-menu"></span></a>
                        <span class="mini-textbox" id="key1" style="border-width: 0px; width: 150px; padding: 0px;"><span class="mini-textbox-border"><input type="text" class="mini-textbox-input" autocomplete="off" placeholder="" id="key1$text"></span><input type="hidden"></span>   
                        <a class="mini-button" href="javascript:void(0)" id="searchgrid1"><span class="mini-button-text ">查询</span></a>
                      </div>
                      <div class="clearfix"></div>
                  </div>
                  <div class="panel-collapse collapse in">
                  
                    <div class="portlet-body" style="height: 500px;">
                      <?php include_once './templates/table/Table.php' ?>
                    </div>
                  </div>
                </div>
              </div> <!-- end col -->
            </div>
            <!-- end row -->
            <style type="text/css">
              .tbkey,.tbvalue{
                display:inline-block;
                /*text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;*/
              }
              .tbkey{width: 100px;}
              .tbvalue{width: calc(100% - 100px);}
            </style>
            <div class="row">
              <div class="col-xs-12">
                <div class="card-box" >
                  <div class="row" id="Jtbbox"></div>
                </div>
              </div> <!-- end col -->
            </div>
          </div>
        </div>
        
      </div>
      
      
    </div> <!-- container -->
  </div> <!-- content -->
</div>




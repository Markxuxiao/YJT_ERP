<div class="content-page">
  <!-- Start content -->
  <div class="content">
    <div class="container">
      <!-- 表格 -->
      <div class="row" style="position: relative;">
        <div class="col-xs-12">
          <div class="card-box" style="position: absolute;top:0;left:10px;width:200px;min-height:544px;overflow: auto;">
            <ul id="tree3" class="mini-tree" showTreeIcon="false" textField="text" idField="id" >        
            </ul>
          </div>
          <div style="padding-left:220px;width: 100%;">
            <div class="row">
              <div class="col-xs-12">
                <div class="portlet">
                  <div class="portlet-heading">
                      <h3 class="portlet-title text-dark text-uppercase">
                          表格控件
                      </h3>
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




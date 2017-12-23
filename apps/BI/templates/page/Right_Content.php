<div class="content-page">
  <!-- Start content -->
  <div class="content">
    <div class="container">

      <!-- Page-Title -->
      <div class="row" style="margin-bottom: 10px;">
        <div class="col-sm-12">
          <div class="btn-group" role="group">
            <a href="#" type="button" class="btn btn-white">按时间</a>
            <a href="#"  type="button" class="btn btn-white">按销售额</a>
            <a href="#"  type="button" class="btn btn-white">按XX维度</a>
          </div>
        </div>
      </div>

      <div class="row">
        <!--柱状图-->
        <div class="col-xs-4">
          <div class="card-box">
            <h4 class="text-dark header-title m-t-0 m-b-30">柱状图</h4>
            <div class="widget-chart text-center">
              <div id="barChart1" style="width: 100%;height: 300px;"></div>
              <!--<ul class="list-inline m-t-15">
                <li>
                  <h5 class="text-muted m-t-20">Target</h5>
                  <h4 class="m-b-0">$1000</h4>
                </li>
                <li>
                  <h5 class="text-muted m-t-20">Last week</h5>
                  <h4 class="m-b-0">$523</h4>
                </li>
                <li>
                  <h5 class="text-muted m-t-20">Last Month</h5>
                  <h4 class="m-b-0">$965</h4>
                </li>
              </ul>-->
            </div>
          </div>
        </div>
        
        <!--柱状图+折线图-->
        <div class="col-xs-4">
          <div class="card-box">
            <h4 class="text-dark  header-title m-t-0 m-b-30">柱状图+折线图</h4>
            <div class="widget-chart text-center">
              <div id="barChart2" style="width: 100%;height: 300px;"></div>             
            </div>
          </div>
        </div>

        <!--折线图1-->
        <div class="col-xs-4">
          <div class="card-box">
            <h4 class="text-dark  header-title m-t-0 m-b-30">折线图1</h4>
            <div class="widget-chart text-center">
              <div id="lineChart1" style="width: 100%;height: 300px;"></div>             
            </div>
          </div>
        </div>
        
         <!--折线图2-->
        <div class="col-xs-4">
          <div class="card-box">
            <h4 class="text-dark  header-title m-t-0 m-b-30">折线图2</h4>
            <div class="widget-chart text-center">
              <div id="lineChart2" style="width: 100%;height: 300px;"></div>              
            </div>
          </div>
        </div>
        
        <!--饼图（扇形）-->
        <div class="col-xs-4">
          <div class="card-box">
            <h4 class="text-dark  header-title m-t-0 m-b-30">饼图（扇形）</h4>
            <div class="widget-chart text-center">
              <div id="pieChart1" style="width: 100%;height: 300px;"></div>              
            </div>
          </div>
        </div>
        
        <!--饼图（环形）-->
        <div class="col-xs-4">
          <div class="card-box">
            <h4 class="text-dark  header-title m-t-0 m-b-30">饼图（环形）</h4>
            <div class="widget-chart text-center">
              <div id="pieChart2" style="width: 100%;height: 300px;"></div>              
            </div>
          </div>
        </div>     
        
        
        <!--饼图（环形进度条）-->
        <div class="col-xs-4">
          <div class="card-box">
            <h4 class="text-dark  header-title m-t-0 m-b-30">饼图（环形进度条）</h4>
            <div class="widget-chart text-center">
              <div id="pieChart3" style="width: 100%;height: 300px;"></div>             
            </div>
          </div>
        </div>
        
        
        <!--仪表盘-->
        <div class="col-xs-4">
          <div class="card-box">
            <h4 class="text-dark  header-title m-t-0 m-b-30">仪表盘</h4>
            <div class="widget-chart text-center">
              <div id="gaugeChart" style="width: 100%;height: 300px;"></div>              
            </div>
          </div>
        </div>
        
        <!--漏斗图-->
        <div class="col-xs-4">
          <div class="card-box">
            <h4 class="text-dark  header-title m-t-0 m-b-30">漏斗图</h4>
            <div class="widget-chart text-center">
              <div id="funnelChart" style="width: 100%;height: 300px;"></div>              
            </div>
          </div>
        </div>
      </div>

      <!-- 表格 -->
      <div class="row">
        <div class="col-lg-12">
          <?php include_once './templates/table/Table.php' ?>
        </div> <!-- end col -->
      </div>
      <!-- end row -->

    </div> <!-- container -->
  </div> <!-- content -->
</div>
<div class="content-page">
  <!-- Start content -->
  <div class="content">
    <div class="container">
      <!-- 表格 -->
      <div class="row">
        <div class="col-lg-12">
          <div class="card-box" style="height: 500px;">
            <?php include_once './templates/table/Table.php' ?>
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
        <div class="col-lg-12">
          <div class="card-box" >
            <div class="row" id="Jtbbox"></div>
          </div>
        </div> <!-- end col -->
      </div>
    </div> <!-- container -->
  </div> <!-- content -->
</div>




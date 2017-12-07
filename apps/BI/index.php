<?php
  define("APP_ROOT",dirname(__FILE__));
  define('BASE_PATH','http://'.$_SERVER['HTTP_HOST'].'/ERPindex/apps/BI/');
  define('ROOT_PATH','http://'.$_SERVER['HTTP_HOST'].'/ERPindex/');

  // echo ROOT_PATH;
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="万维BI系统">
        <link rel="shortcut icon" href="<?PHP echo(ROOT_PATH) ?>assets/images/favicon_1.ico">

        <title>万维BI系统</title>
        <link href="http://oa.gzwebway.com:8888/oa/scripts/miniui/themes/default/miniui.css" rel="stylesheet" type="text/css">
        <link href="http://www.miniui.com/scripts/miniui/themes/bootstrap/skin.css" rel="stylesheet" type="text/css">
        <link href="<?PHP echo(ROOT_PATH) ?>assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />

        <link href="<?PHP echo(ROOT_PATH) ?>assets/css/icons.css" rel="stylesheet" type="text/css" />
        <link href="./css/core.css" rel="stylesheet" type="text/css" />
        <link href="./css/components.css" rel="stylesheet" type="text/css" />
        <link href="./css/pages.css" rel="stylesheet" type="text/css" />
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/modernizr.min.js"></script>
        
    </head>


    <body class="fixed-left">
        
      <!-- Begin page -->
      <div id="wrapper">
        <?php include_once './templates/Top_Bar.php' ?>
        <!-- ========== Left Sidebar Start ========== -->
        <?php include_once './templates/Left_Sidebar.php' ?>
        <!-- Start right Content here -->                     
        <?php include_once './templates/Right_Content.php' ?>
        <!-- End Right content here -->
      </div>
      <!-- END wrapper -->

        <!-- jQuery  -->
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/jquery.min.js"></script>
        <script src="http://oa.gzwebway.com:8888/oa/scripts/miniui/miniui.js" type="text/javascript"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/bootstrap.min.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/jquery.nicescroll.js"></script>


        
        <script src="./js/jquery.app.js"></script>
        <script src="./js/jquery.dashboard_3.js"></script>

        <script type="text/javascript">
          
        </script>

    </body>
</html>
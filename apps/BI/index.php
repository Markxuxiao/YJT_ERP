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

        <link href="<?PHP echo(ROOT_PATH) ?>assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="<?PHP echo(ROOT_PATH) ?>assets/css/core.css" rel="stylesheet" type="text/css" />
        <link href="<?PHP echo(ROOT_PATH) ?>assets/css/components.css" rel="stylesheet" type="text/css" />
        <link href="<?PHP echo(ROOT_PATH) ?>assets/css/icons.css" rel="stylesheet" type="text/css" />
        <link href="<?PHP echo(ROOT_PATH) ?>assets/css/pages.css" rel="stylesheet" type="text/css" />
        <link href="<?PHP echo(ROOT_PATH) ?>assets/css/responsive.css" rel="stylesheet" type="text/css" />

        <!-- HTML5 Shiv and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->

        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/modernizr.min.js"></script>
        
    </head>


    <body class="fixed-left">
        
      <!-- Begin page -->
      <div id="wrapper">

        <?php include_once './templates/top_bar.php' ?>
        <!-- ========== Left Sidebar Start ========== -->
        <div class="left side-menu">
          <?php include_once './templates/Left_Sidebar.php' ?>
          <!-- Start right Content here -->                     
          <?php include_once './templates/Right_Content.php' ?>
          <!-- End Right content here -->
        </div>
        <!-- END wrapper -->

        <script>
            var resizefunc = [];
        </script>

        <!-- jQuery  -->
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/jquery.min.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/bootstrap.min.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/detect.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/fastclick.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/jquery.slimscroll.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/jquery.blockUI.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/waves.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/wow.min.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/jquery.nicescroll.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/jquery.scrollTo.min.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/plugins/peity/jquery.peity.min.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/plugins/jquery-sparkline/jquery.sparkline.min.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/pages/jquery.dashboard_3.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/jquery.core.js"></script>
        <script src="<?PHP echo(ROOT_PATH) ?>assets/js/jquery.app.js"></script>
    
        

    </body>
</html>
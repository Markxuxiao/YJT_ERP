<?php
  define("APP_ROOT",dirname(__FILE__));
  define('BASE_PATH','http://'.$_SERVER['HTTP_HOST'].'/ERPindex/apps/BI/');
  define('ROOT_PATH','http://'.$_SERVER['HTTP_HOST'].'/ERPindex/');
  define('PAGE',isset($_GET["page"]) ? $_GET['page'] : 'Right_Content');

  //导航
  $sidebar = array();
  $sidebar['Right_Content']="综合实例";
  $sidebar['neishu']="内树型";
  $sidebar['mingxi']="明细型";
  $sidebar['ditu']="地图型";
  $sidebar['paihang']="排行型";
  $sidebar['tubiao']="图表型";
  $sidebar['zuanqu']="钻取";

  // echo ROOT_PATH;
?>
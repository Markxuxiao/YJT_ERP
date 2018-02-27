

<div class="left side-menu">
  <div class="sidebar-inner slimscrollleft">
    <!--- Divider -->
    <div id="sidebar-menu">
      <ul>
        <?php foreach($sidebar as $x=>$x_value) {?>
            <li class="has_sub">
              <a href="<?php  echo BASE_PATH.'index.php?page='.$x ?>" class="waves-effect <?php  echo $x == PAGE?'active':'' ?>"><i class="ti-home"></i> <span> <?php  echo $x_value ?> </span> </a>
            </li>
        <?php } ?>
      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="clearfix"></div>
  </div>
</div>
<!-- Left Sidebar End -->
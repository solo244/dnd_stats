/* Menu */

function toggleMenu(){
  var $this = $(this),
      $name = $this.text().replace(" ", "").toLowerCase();

  $menu_items.removeClass("active_li");
  $this.addClass("active_li");
  $pages.removeClass("active_page");
  $("." + $name).addClass("active_page");
}

/* Set up real time */

function showTime(){
  setInterval(function(){ updateTime(); }, 1000);

  function updateTime(){
    var now = new Date(Date.now());
    var hours;
    if(now.getHours() < 10){
      hours = "0" + now.getHours();
    }else{
      hours = now.getHours();
    }
    var minutes;
    if(now.getMinutes() < 10){
      minutes = "0" + now.getMinutes();
    }else{
      minutes = now.getMinutes();
    }
    var formatted = hours + ":" + minutes;
    $clock.find("p").html(formatted);
  }
}

// Set up submenu clicks
function gotoSub(){
  var $this = $(this),
      $name = $this.text().replace(" ", "").toLowerCase().trim();

  console.log($name);
  $stuff_submenu.removeClass("active_li");
  $this.addClass("active_li");
  $stuff_content.removeClass("active_subpage");
  $(".stuff-" + $name).addClass("active_subpage");
}

function gotoNpc(){
  var $this = $(this),
      $name = $this.find(".s-title").text().replace(" ", "").toLowerCase().trim().replace(" ", "");

  console.log($name);
  $npc_submenu.removeClass("active_npc");
  $this.addClass("active_npc");
  $npc_content.removeClass("npc-content-active");
  console.log($name);
  $("." + $name).addClass("npc-content-active");
}

/* Switch info or people in locations */
function showLocationInfo(){
  $loc_info_c.hide();
  $loc_overview_c.show();
}

function showLocationOverview(){
  $loc_info_c.show();
  $loc_overview_c.hide();
}

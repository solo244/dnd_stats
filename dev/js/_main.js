/*
 * Vars
 */
var $body = $("html, body"),
    $left = $body.find(".left"), // Left
    $right = $body.find(".right"), // Right
    $players = $right.find(".players"),
    $add_enemy = $right.find(".add-enemy"),
    $left_location = $left.find(".left_location"),
    $current_location = $left_location.find(".current_location"),
    $loc_info = $left_location.find(".info"),
    $loc_overview = $left_location.find(".overview"),
    $loc_info_c = $left_location.find(".info_content"),
    $loc_overview_c = $left_location.find(".overview_content"),
    $change_location = $current_location.find(".change"),
    $pages = $body.find(".page"), // Pages
    $active_page = $body.find(".active_page"),
    $menu = $body.find(".mainMenu"), // Menu
    $menu_items = $menu.find("li"),
    $clock = $body.find(".clock"), // Clock
    $dices = $right.find(".dices"), // Dices
    $dice = $right.find(".dice"),
    $die = $dices.find(".die"),
    $result = $dice.find(".result"),
    $combat_btn = $dices.find(".active_combat"),
    $combat = $right.find(".combat"), // Combat
    $sort = $right.find(".sort"),
    $stats = $right.find(".stats"), // Stats
    $money = $right.find(".money"), // Money
    $modal_all = $body.find(".modal-overlay"), // Modal
    $modal = $modal_all.find(".modal"),
    $modal_close = $modal_all.find(".modal-bg"),
    $add = $stats.find(".add"),
    $substract = $stats.find(".substract"),
    $stuff_submenu = $body.find(".stuff .stuff-menu_item"),
    $stuff_content = $body.find(".stuff-content"),
    $npc_submenu = $body.find(".npc .sub-menu_stuff .stuff-menu_item"),
    $npc_content = $body.find(".npc-content"),
    $ui_saving = $body.find(".top-saving"),
    $ui_saved = $body.find(".top-saved");

  var player1,
      player2,
      player3,
      player4,
      player5,
      notes;

/*
 * Let's get ready to rumble
 */
$(document).ready(function(){
  load();

  $ui_saving.hide();
  $ui_saved.hide();

  $menu_items.on("click", toggleMenu);
  $die.on("click", rollDie);
  $combat_btn.on("click", toggleCombat);
  $modal_close.on("click", closeModal);
  $change_location.on("click", changeLocation);
  $add.on("click", addNumber);
  $substract.on("click", addNumber);
  $stuff_submenu.on("click", gotoSub);
  $npc_submenu.on("click", gotoNpc);
  $sort.on("click", sorting);
  $add_enemy.on("click", addEnemy);
  $loc_info.on("click", showLocationInfo);
  $loc_overview.on("click", showLocationOverview);

  showTime();
  setBackgrounds();
});

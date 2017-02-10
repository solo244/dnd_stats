/* Update players */
function updatePlayers(){
  var numPlayers = 5;

  for(var i = 1; i < numPlayers + 1; i++){
    var cplayer = "player" + i;
    var $cplayer = $body.find("." + cplayer);
    var player = eval(cplayer);

    $cplayer.find(".image img").attr("src", player.image);
    $cplayer.find(".name").html(player.name);
    $cplayer.find(".level").html(player.class + " - lvl " + player.level);
    $cplayer.find(".current_health input").val(player.health);
    $cplayer.find(".max-health").html("/" + player.maxhealth);
    $cplayer.find(".money input").val(player.money);

    $cplayer.find(".initiative p").html(player.initiative);
    $cplayer.find(".spell_slots input").val(player.spellslots);
    $cplayer.find(".attacks .val").html(player.attacks);
    $cplayer.find(".spells .val").html(player.spells);
    $cplayer.find(".hits .val").html(player.hits);
    $cplayer.find(".misses .val").html(player.misses);
    $cplayer.find(".blocked .val").html(player.blocked);
    $cplayer.find(".healed .val").html(player.healed);
    $cplayer.find(".damage_done .val").html(player.damagedone);
    $cplayer.find(".damage_received .val").html(player.damagereceived);
    $cplayer.find(".roll20 .val").html(player.roll20);
    $cplayer.find(".roll1 .val").html(player.roll1);
  }
}

/* Add enemy */
function addEnemy(){
  var build = '<div class="player enemy"><div class="delete"></div><div class="name title"><input type="text"></div><div class="initiative"><input type="text"><i class="ra ra-lightning-bolt"></i></div><div class="health"> <i class="ra ra-hearts"></i><div class="current_health"><input type="text"></div><div class="max-health"><input type="text"></div></div></div>';

  $players.append(build);
  $players.find(".delete").on("click", deletePlayers);
}

/* Delete enemy */
function deletePlayers(){
  var $this = $(this),
      $enemy = $this.closest(".enemy");

  $enemy.remove();
}

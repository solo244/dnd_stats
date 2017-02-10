/*
 * Saving and loading
 */
function save(e){
  $ui_saving.css("opacity", 1).show();

  var content = {
    player1: {
      name : "Shen - Half Elf", //
      level : 1, //
      class : "Monk", //
      image : "images/players/player1.png", //
      health: $(".player1 .current_health input").val(),
      maxhealth : 9, //
      money: $(".player1 .money input").val(),
      initiative : -3, //
      spellslots: $(".player1 .spell_slots input").val(),
      attacks: $(".player1 .attacks .val").text(),
      spells: $(".player1 .spells .val").text(),
      hits: $(".player1 .hits .val").text(),
      misses: $(".player1 .misses .val").text(),
      blocked: $(".player1 .blocked .val").text(),
      healed: $(".player1 .healed .val").text(),
      damagedone: $(".player1 .damage_done .val").text(),
      damagereceived: $(".player1 .damage_received .val").text(),
      roll20: $(".player1 .roll20 .val").text(),
      roll1: $(".player1 .roll1 .val").text()
    },
    player2: {
      name  : "Tharlo Galanodel - Elf", //
      level : 1, //
      class : "Paladin", //
      image : "images/players/player2.png", //
      health: $(".player2 .current_health input").val(),
      maxhealth : 11, //
      money: $(".player2 .money input").val(),
      initiative : 0, //
      spellslots: $(".player2 .spell_slots input").val(),
      attacks: $(".player2 .attacks .val").text(),
      spells: $(".player2 .spells .val").text(),
      hits: $(".player2 .hits .val").text(),
      misses: $(".player2 .misses .val").text(),
      blocked: $(".player2 .blocked .val").text(),
      healed: $(".player2 .healed .val").text(),
      damagedone: $(".player2 .damage_done .val").text(),
      damagereceived: $(".player2 .damage_received .val").text(),
      roll20: $(".player2 .roll20 .val").text(),
      roll1: $(".player2 .roll1 .val").text()
    },
    player3: {
      name  : "Tom The Destroyer - Gnome", //
      level : 1, //
      class : "Wizard", //
      image : "images/players/player3.png", //
      health: $(".player3 .current_health input").val(),
      maxhealth : 7, //
      money: $(".player3 .money input").val(),
      initiative : 0, //
      spellslots: $(".player3 .spell_slots input").val(),
      attacks: $(".player3 .attacks .val").text(),
      spells: $(".player3 .spells .val").text(),
      hits: $(".player3 .hits .val").text(),
      misses: $(".player3 .misses .val").text(),
      blocked: $(".player3 .blocked .val").text(),
      healed: $(".player3 .healed .val").text(),
      damagedone: $(".player3 .damage_done .val").text(),
      damagereceived: $(".player3 .damage_received .val").text(),
      roll20: $(".player3 .roll20 .val").text(),
      roll1: $(".player3 .roll1 .val").text()
    },
    player4: {
      name  : "Macros - Half Orc", //
      level : 1, //
      class : "Warlock", //
      image : "images/players/player4.png", //
      health: $(".player4 .current_health input").val(),
      maxhealth : 10, //
      money: $(".player4 .money input").val(),
      initiative : -1, //
      spellslots: $(".player4 .spell_slots input").val(),
      attacks: $(".player4 .attacks .val").text(),
      spells: $(".player4 .spells .val").text(),
      hits: $(".player4 .hits .val").text(),
      misses: $(".player4 .misses .val").text(),
      blocked: $(".player4 .blocked .val").text(),
      healed: $(".player4 .healed .val").text(),
      damagedone: $(".player4 .damage_done .val").text(),
      damagereceived: $(".player4 .damage_received .val").text(),
      roll20: $(".player4 .roll20 .val").text(),
      roll1: $(".player4 .roll1 .val").text()
    },
    player5: {
      name  : "Amafrey Stormwind - Human", //
      level : 1, //
      class : "Barbarian", //
      image : "images/players/player5.png", //
      health: $(".player5 .current_health input").val(),
      maxhealth : 14, //
      money: $(".player5 .money input").val(),
      initiative : -1, //
      spellslots: $(".player5 .spell_slots input").val(),
      attacks: $(".player5 .attacks .val").text(),
      spells: $(".player5 .spells .val").text(),
      hits: $(".player5 .hits .val").text(),
      misses: $(".player5 .misses .val").text(),
      blocked: $(".player5 .blocked .val").text(),
      healed: $(".player5 .healed .val").text(),
      damagedone: $(".player5 .damage_done .val").text(),
      damagereceived: $(".player5 .damage_received .val").text(),
      roll20: $(".player5 .roll20 .val").text(),
      roll1: $(".player5 .roll1 .val").text()
    },
    notes: {
      current: $(".story_2 .date textarea").val().replace(/\n/g,"<br>"),
      previous : "Some notes in the shape of<br>bullet points<br>in the hope that its all clear and stuff :)"
    }
  };

  console.log(notes);

  $.ajax({
    type: "GET",
    async: true,
    url: 'save.php',
    data: { data: JSON.stringify(content, null, 2) },
    success: function () { console.log("success"); },
    failure: function() { console.log("failures"); }
  });

  $ui_saving.hide();
  $ui_saved.css("opacity", 1).show();
  $ui_saved.animate({"opacity": 0}, 500, function(){
    $ui_saved.hide();
  });
}

function load(e){
  $.getJSON("data.json", function(data) {
    player1 = {
      "name"  : data.player1.name,
      "level" : data.player1.level,
      "class" : data.player1.class,
      "image" : data.player1.image,
      "health"  : data.player1.health,
      "maxhealth" : data.player1.maxhealth,
      "money" : data.player1.money,
      "initiative" : data.player1.initiative,
      "spellslots" : data.player1.spellslots,
      "attacks" : data.player1.attacks,
      "spells" : data.player1.spells,
      "hits" : data.player1.hits,
      "misses" : data.player1.misses,
      "blocked" : data.player1.blocked,
      "healed" : data.player1.healed,
      "damagedone" : data.player1.damagedone,
      "damagereceived" : data.player1.damagereceived,
      "roll20" : data.player1.roll20,
      "roll1" : data.player1.roll1
    };
    player2 = {
      "name"  : data.player2.name,
      "level" : data.player2.level,
      "class" : data.player2.class,
      "image" : data.player2.image,
      "health"  : data.player2.health,
      "maxhealth" : data.player2.maxhealth,
      "money" : data.player2.money,
      "initiative" : data.player2.initiative,
      "spellslots" : data.player2.spellslots,
      "attacks" : data.player2.attacks,
      "spells" : data.player2.spells,
      "hits" : data.player2.hits,
      "misses" : data.player2.misses,
      "blocked" : data.player2.blocked,
      "healed" : data.player2.healed,
      "damagedone" : data.player2.damagedone,
      "damagereceived" : data.player2.damagereceived,
      "roll20" : data.player2.roll20,
      "roll1" : data.player2.roll1
    };
    player3 = {
      "name"  : data.player3.name,
      "level" : data.player3.level,
      "class" : data.player3.class,
      "image" : data.player3.image,
      "health"  : data.player3.health,
      "maxhealth" : data.player3.maxhealth,
      "money" : data.player3.money,
      "initiative" : data.player3.initiative,
      "spellslots" : data.player3.spellslots,
      "attacks" : data.player3.attacks,
      "spells" : data.player3.spells,
      "hits" : data.player3.hits,
      "misses" : data.player3.misses,
      "blocked" : data.player3.blocked,
      "healed" : data.player3.healed,
      "damagedone" : data.player3.damagedone,
      "damagereceived" : data.player3.damagereceived,
      "roll20" : data.player3.roll20,
      "roll1" : data.player3.roll1
    };
    player4 = {
      "name"  : data.player4.name,
      "level" : data.player4.level,
      "class" : data.player4.class,
      "image" : data.player4.image,
      "health"  : data.player4.health,
      "maxhealth" : data.player4.maxhealth,
      "money" : data.player4.money,
      "initiative" : data.player4.initiative,
      "spellslots" : data.player4.spellslots,
      "attacks" : data.player4.attacks,
      "spells" : data.player4.spells,
      "hits" : data.player4.hits,
      "misses" : data.player4.misses,
      "blocked" : data.player4.blocked,
      "healed" : data.player4.healed,
      "damagedone" : data.player4.damagedone,
      "damagereceived" : data.player4.damagereceived,
      "roll20" : data.player4.roll20,
      "roll1" : data.player4.roll1
    };
    player5 = {
      "name"  : data.player5.name,
      "level" : data.player5.level,
      "class" : data.player5.class,
      "image" : data.player5.image,
      "health"  : data.player5.health,
      "maxhealth" : data.player5.maxhealth,
      "money" : data.player5.money,
      "initiative" : data.player5.initiative,
      "spellslots" : data.player5.spellslots,
      "attacks" : data.player5.attacks,
      "spells" : data.player5.spells,
      "hits" : data.player5.hits,
      "misses" : data.player5.misses,
      "blocked" : data.player5.blocked,
      "healed" : data.player5.healed,
      "damagedone" : data.player5.damagedone,
      "damagereceived" : data.player5.damagereceived,
      "roll20" : data.player5.roll20,
      "roll1" : data.player5.roll1
    };
    notes = {
      "current" : data.notes.current,
      "previous" : data.notes.previous
    };

    var setTimer = setInterval(function () {
      $body.find(".loading").addClass("done-loading");
      clearInterval(setTimer);
      updatePlayers();
    }, 800);

    updateNotes();
  });
}

function updateNotes(){
  var notes_c = notes.current.replace(/<br>/gi,"\n"),
      notes_p = notes.previous;

  $body.find(".story_2 textarea").val(notes_c);
  $body.find(".notes .note p").html(notes_p);
}

/* Check for save updates */
$body.find(".story_2 textarea").on("keyup", save);
$body.find(".money input").on("keyup", save);
$body.find(".current_health input").on("keyup", save);
$body.find(".spell_slots input").on("keyup", save);

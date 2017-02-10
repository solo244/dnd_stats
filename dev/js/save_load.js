/*
 * Loading
 */
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
  });
}

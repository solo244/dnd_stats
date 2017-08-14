(function ($) {

  /*
   * Vars
   */
  var player1,
      player2,
      player3,
      player4,
      player5,
      player6;

  var $body = $("body"),
      $stats_melee = $body.find(".stat-attacks"),
      $stats_spells = $body.find(".stat-spells"),
      $stats_hits = $body.find(".stat-hits"),
      $stats_misses = $body.find(".stat-misses"),
      $stats_accuracy = $body.find(".stat-accuracy"),
      $stats_blocked = $body.find(".stat-blocked"),
      $stats_healed = $body.find(".stat-healed"),
      $stats_damage = $body.find(".stat-damage"),
      $stats_received = $body.find(".stat-received"),
      $stats_kills = $body.find(".stat-kills"),
      $stats_downs = $body.find(".stat-downs"),
      $stats_deaths = $body.find(".stat-deaths"),
      $stats_roll20 = $body.find(".stat-roll20"),
      $stats_roll1 = $body.find(".stat-roll1"),
      $bars = $body.find(".bars"),
      $bar = $bars.find(".bar");

  /*
   * Init
   */
  load();

  /*
   * Loading
   */
  function updateStats(p1, p2, p3, p4, p5, p6){
    // Calc Accuracy
    var acc_p1 = Math.floor(parseInt(p1.hits) / (parseInt(p1.attacks) + parseInt(p1.spells)) * 100);
    var acc_p2 = Math.floor(parseInt(p2.hits) / (parseInt(p2.attacks) + parseInt(p2.spells)) * 100);
    var acc_p3 = Math.floor(parseInt(p3.hits) / (parseInt(p3.attacks) + parseInt(p3.spells)) * 100);
    var acc_p4 = Math.floor(parseInt(p4.hits) / (parseInt(p4.attacks) + parseInt(p4.spells)) * 100);
    var acc_p5 = Math.floor(parseInt(p5.hits) / (parseInt(p5.attacks) + parseInt(p5.spells)) * 100);
    var acc_p6 = Math.floor(parseInt(p6.hits) / (parseInt(p6.attacks) + parseInt(p6.spells)) * 100);
    // Melee
    $stats_melee.find(".p1").html("<span>" + p1.attacks + "</span>");
    $stats_melee.find(".p2").html("<span>" + p2.attacks + "</span>");
    $stats_melee.find(".p3").html("<span>" + p3.attacks + "</span>");
    $stats_melee.find(".p4").html("<span>" + p4.attacks + "</span>");
    $stats_melee.find(".p5").html("<span>" + p5.attacks + "</span>");
    $stats_melee.find(".p6").html("<span>" + p6.attacks + "</span>");
    // Spells
    $stats_spells.find(".p1").html("<span>" + p1.spells + "</span>");
    $stats_spells.find(".p2").html("<span>" + p2.spells + "</span>");
    $stats_spells.find(".p3").html("<span>" + p3.spells + "</span>");
    $stats_spells.find(".p4").html("<span>" + p4.spells + "</span>");
    $stats_spells.find(".p5").html("<span>" + p5.spells + "</span>");
    $stats_spells.find(".p6").html("<span>" + p6.spells + "</span>");
    // Hits
    $stats_hits.find(".p1").html("<span>" + p1.hits + "</span>");
    $stats_hits.find(".p2").html("<span>" + p2.hits + "</span>");
    $stats_hits.find(".p3").html("<span>" + p3.hits + "</span>");
    $stats_hits.find(".p4").html("<span>" + p4.hits + "</span>");
    $stats_hits.find(".p5").html("<span>" + p5.hits + "</span>");
    $stats_hits.find(".p6").html("<span>" + p6.hits + "</span>");
    // Misses
    $stats_misses.find(".p1").html("<span>" + p1.misses + "</span>");
    $stats_misses.find(".p2").html("<span>" + p2.misses + "</span>");
    $stats_misses.find(".p3").html("<span>" + p3.misses + "</span>");
    $stats_misses.find(".p4").html("<span>" + p4.misses + "</span>");
    $stats_misses.find(".p5").html("<span>" + p5.misses + "</span>");
    $stats_misses.find(".p6").html("<span>" + p6.misses + "</span>");
    // Accuracy
    $stats_accuracy.find(".p1").html("<span>" + acc_p1 + "%</span>");
    $stats_accuracy.find(".p2").html("<span>" + acc_p2 + "%</span>");
    $stats_accuracy.find(".p3").html("<span>" + acc_p3 + "%</span>");
    $stats_accuracy.find(".p4").html("<span>" + acc_p4 + "%</span>");
    $stats_accuracy.find(".p5").html("<span>" + acc_p5 + "%</span>");
    $stats_accuracy.find(".p6").html("<span>" + acc_p6 + "%</span>");
    // Blocked
    $stats_blocked.find(".p1").html("<span>" + p1.blocked + "</span>");
    $stats_blocked.find(".p2").html("<span>" + p2.blocked + "</span>");
    $stats_blocked.find(".p3").html("<span>" + p3.blocked + "</span>");
    $stats_blocked.find(".p4").html("<span>" + p4.blocked + "</span>");
    $stats_blocked.find(".p5").html("<span>" + p5.blocked + "</span>");
    $stats_blocked.find(".p6").html("<span>" + p6.blocked + "</span>");
    // Healed
    $stats_healed.find(".p1").html("<span>" + p1.healed + "</span>");
    $stats_healed.find(".p2").html("<span>" + p2.healed + "</span>");
    $stats_healed.find(".p3").html("<span>" + p3.healed + "</span>");
    $stats_healed.find(".p4").html("<span>" + p4.healed + "</span>");
    $stats_healed.find(".p5").html("<span>" + p5.healed + "</span>");
    $stats_healed.find(".p6").html("<span>" + p6.healed + "</span>");
    // Damage Done
    $stats_damage.find(".p1").html("<span>" + p1.damagedone + "</span>");
    $stats_damage.find(".p2").html("<span>" + p2.damagedone + "</span>");
    $stats_damage.find(".p3").html("<span>" + p3.damagedone + "</span>");
    $stats_damage.find(".p4").html("<span>" + p4.damagedone + "</span>");
    $stats_damage.find(".p5").html("<span>" + p5.damagedone + "</span>");
    $stats_damage.find(".p6").html("<span>" + p6.damagedone + "</span>");
    // Damage Received
    $stats_received.find(".p1").html("<span>" + p1.damagereceived + "</span>");
    $stats_received.find(".p2").html("<span>" + p2.damagereceived + "</span>");
    $stats_received.find(".p3").html("<span>" + p3.damagereceived + "</span>");
    $stats_received.find(".p4").html("<span>" + p4.damagereceived + "</span>");
    $stats_received.find(".p5").html("<span>" + p5.damagereceived + "</span>");
    $stats_received.find(".p6").html("<span>" + p6.damagereceived + "</span>");
    // Kills Made
    $stats_kills.find(".p1").html("<span>" + p1.kills + "</span>");
    $stats_kills.find(".p2").html("<span>" + p2.kills + "</span>");
    $stats_kills.find(".p3").html("<span>" + p3.kills + "</span>");
    $stats_kills.find(".p4").html("<span>" + p4.kills + "</span>");
    $stats_kills.find(".p5").html("<span>" + p5.kills + "</span>");
    $stats_kills.find(".p6").html("<span>" + p6.kills + "</span>");
    // Times Downed
    $stats_downs.find(".p1").html("<span>" + p1.downs + "</span>");
    $stats_downs.find(".p2").html("<span>" + p2.downs + "</span>");
    $stats_downs.find(".p3").html("<span>" + p3.downs + "</span>");
    $stats_downs.find(".p4").html("<span>" + p4.downs + "</span>");
    $stats_downs.find(".p5").html("<span>" + p5.downs + "</span>");
    $stats_downs.find(".p6").html("<span>" + p6.downs + "</span>");
    // Deaths
    $stats_deaths.find(".p1").html("<span>" + p1.deaths + "</span>");
    $stats_deaths.find(".p2").html("<span>" + p2.deaths + "</span>");
    $stats_deaths.find(".p3").html("<span>" + p3.deaths + "</span>");
    $stats_deaths.find(".p4").html("<span>" + p4.deaths + "</span>");
    $stats_deaths.find(".p5").html("<span>" + p5.deaths + "</span>");
    $stats_deaths.find(".p6").html("<span>" + p6.deaths + "</span>");
    // Roll20
    $stats_roll20.find(".p1").html("<span>" + p1.roll20 + "</span>");
    $stats_roll20.find(".p2").html("<span>" + p2.roll20 + "</span>");
    $stats_roll20.find(".p3").html("<span>" + p3.roll20 + "</span>");
    $stats_roll20.find(".p4").html("<span>" + p4.roll20 + "</span>");
    $stats_roll20.find(".p5").html("<span>" + p5.roll20 + "</span>");
    $stats_roll20.find(".p6").html("<span>" + p6.roll20 + "</span>");
    // Roll1
    $stats_roll1.find(".p1").html("<span>" + p1.roll1 + "</span>");
    $stats_roll1.find(".p2").html("<span>" + p2.roll1 + "</span>");
    $stats_roll1.find(".p3").html("<span>" + p3.roll1 + "</span>");
    $stats_roll1.find(".p4").html("<span>" + p4.roll1 + "</span>");
    $stats_roll1.find(".p5").html("<span>" + p5.roll1 + "</span>");
    $stats_roll1.find(".p6").html("<span>" + p6.roll1 + "</span>");

    calculateMaxes();
    scale();
  }

  function calculateMaxes(e){
    findHighest($stats_melee);
    findHighest($stats_spells);
    findHighest($stats_hits);
    findHighest($stats_misses);
    findHighest($stats_accuracy);
    findHighest($stats_blocked);
    findHighest($stats_healed);
    findHighest($stats_damage);
    findHighest($stats_received);
    findHighest($stats_kills);
    findHighest($stats_downs);
    findHighest($stats_deaths);
    findHighest($stats_roll20);
    findHighest($stats_roll1);
  }

  function findHighest(stat){
    var highest = 0;
    var setmax = 0;
    stat.find(".bar span").each(function() {
      var $this = $(this),
          $val = parseFloat($this.html());
      highest = Math.max(highest, $val);
      setmax = highest + (highest / 100 * 20);
    });
    stat.find(".max").html(setmax);
  }

  function scale(e){
    $bar.each(function(){
      var $this = $(this),
          value = parseInt($this.find("span").html()),
          percent = parseInt($this.parent().parent().find(".max").text()),
          new_value = value / percent * 200;

      $this.height(new_value);
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
        "kills" : data.player1.kills,
        "downs" : data.player1.downs,
        "deaths" : data.player1.deaths,
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
        "kills" : data.player2.kills,
        "downs" : data.player2.downs,
        "deaths" : data.player2.deaths,
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
        "kills" : data.player3.kills,
        "downs" : data.player3.downs,
        "deaths" : data.player3.deaths,
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
        "kills" : data.player4.kills,
        "downs" : data.player4.downs,
        "deaths" : data.player4.deaths,
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
        "kills" : data.player5.kills,
        "downs" : data.player5.downs,
        "deaths" : data.player5.deaths,
        "roll20" : data.player5.roll20,
        "roll1" : data.player5.roll1
      };
      player6 = {
        "name"  : data.player6.name,
        "level" : data.player6.level,
        "class" : data.player6.class,
        "image" : data.player6.image,
        "health"  : data.player6.health,
        "maxhealth" : data.player6.maxhealth,
        "money" : data.player6.money,
        "initiative" : data.player6.initiative,
        "spellslots" : data.player6.spellslots,
        "attacks" : data.player6.attacks,
        "spells" : data.player6.spells,
        "hits" : data.player6.hits,
        "misses" : data.player6.misses,
        "blocked" : data.player6.blocked,
        "healed" : data.player6.healed,
        "damagedone" : data.player6.damagedone,
        "damagereceived" : data.player6.damagereceived,
        "kills" : data.player6.kills,
        "downs" : data.player6.downs,
        "deaths" : data.player6.deaths,
        "roll20" : data.player6.roll20,
        "roll1" : data.player6.roll1
      };
    }).done(function(){
      var first = setInterval(step1, 1000);
      var sec = setInterval(step2, 1500);

      function step1() {
        $("body").addClass("active");
        $(".preloader").addClass("hide-preloader");
        $("h1").addClass("active");
      }

      function step2() {
        $(".stat").addClass("show");
        updateStats(player1, player2, player3, player4, player5, player6);
      }
    });
  }

})(jQuery);

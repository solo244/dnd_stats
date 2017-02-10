/* Trigger combat on */
function toggleCombat(){
  var $this = $(this);

  if($this.hasClass("actived_combat")){
    disableCombat($this);
  }else{
    enableCombat($this);
  }
}

function enableCombat(btn){
  var $this = btn;
  $right.addClass("right_active");
  $this.addClass("actived_combat");
  $combat.addClass("combat_show");
  $money.addClass("hide_money");
  $sort.addClass("active-sort");
}

function disableCombat(btn){
  var $this = btn;
  $right.removeClass("right_active");
  $this.removeClass("actived_combat");
  $combat.removeClass("combat_show");
  $money.removeClass("hide_money");
  $sort.removeClass("active-sort");
}

/* Roll ma dice */
function rollDie(){
  var $this = parseInt($(this).text().replace("1d", ""));
  var number = 1 + Math.floor(Math.random() * $this);
  console.log(number);
  $result.text(number);
}

/* Add numbers to the stats */
function addNumber(){
  var $this = $(this),
      $val = $this.closest(".stat").find(".val"),
      $p_val = parseInt($val.text());
      dir = $this.prop("class");

  if(dir === "add"){
    var increment_p = $p_val + 1;
    $val.text(increment_p);
  }
  if(dir === "substract"){
    var increment_m = $p_val - 1;
    $val.text(increment_m);
  }
  save();
}

/* Sorting */
function sorting(){
  var $holder = $(".right .players"),
      $divs = $holder.find(".player"),
      sortHighestInitiative = true;

  $sort.click(function(){
    if(sortHighestInitiative){
      var alphabeticallyOrderedDivs = $divs.sort(function(a,b){
        return parseInt($(a).find(".initiative input").val()) > parseInt($(b).find(".initiative input").val());
      });
      $holder.html(alphabeticallyOrderedDivs);
      sortHighestInitiative = false;
      resetFeatures();
      return;
    }
    else{
      var alphabeticallyOrderedDivs2 = $divs.sort(function(a,b){
        return parseInt($(a).find(".initiative input").val()) < parseInt($(b).find(".initiative input").val());
      });
      $holder.html(alphabeticallyOrderedDivs2);
      sortHighestInitiative = true;
      resetFeatures();
      return;
    }
  });

  function resetFeatures(){
    $add.on("click", addNumber);
    $substract.on("click", addNumber);
    $players.find(".delete").on("click", deletePlayers);
  }
}

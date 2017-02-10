// Set abckground images
function setBackgrounds(){
  var $grid_items = $body.find(".grid-item");
  
  $grid_items.each(setBg);

  function setBg(){
    var $this = $(this),
        $title = $this.find("h1").text(),
        path = "url('../images/npcs/" + $title + ".jpg')";

    $this.find(".img").css("background-image", path);

    $this.find(".img").on("click", showBigger);

    function showBigger(){
      $(this).toggleClass("fullscreen");
    }
  }
}

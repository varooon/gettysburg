$(document).ready(function(){

  $("#container").fadeIn(1000);

  $("p").hover(function(){
    $(this).css("background-color", "yellow");
  }, function(){
    $(this).css("background-color", "");
  });

  $("h2").on("click", function(){
    $(this).animate({
      "opacity": "0.25",
      "margin-left": "20px"
    }, 1000,  function(){
        $(".speech").css("opacity", "0.5");
    });
  });

  $("#switcher-default").on("click", function(){
    $(".speech").css("font-size", "1em")
  });

  $("#switcher-large").on("click", function(){
    $(".speech").css("font-size", "1.5em")
  });

  $("#switcher-small").on("click", function(){
    $(".speech").css("font-size", "0.5em")
  });


  $(document).keydown(function(e){
    switch (e.which) {
      case 37:
      $("#switcher").css("margin-left", "-=5px");
      break;

      case 38:
      $("#switcher").css("margin-top", "-=5px");
      break;
      case 39:
      $("#switcher").css("margin-left", "+=5px");
      break;
      case 40:
      $("#switcher").css("margin-top", "+=5px");
      break;
    }
  });


});

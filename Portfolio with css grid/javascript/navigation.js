$(document).ready(function(){
//click on the burger to open the nav
  $("#burger").on("click", function(){
    $("nav").addClass("show-nav");
    $("nav").removeClass("hide-nav");
  });
//click on the cross to close the nav
  $("#close-nav").on("click", function(){
    $("nav").addClass("hide-nav");
    $("nav").removeClass("show-nav");
  });
});

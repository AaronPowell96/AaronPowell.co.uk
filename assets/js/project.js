$(document).ready(function(){
$(".project_images").onClick(function(){
  $(this).css("background-color", "yellow");
  $(this).css("opacity", "0.5");
  }, function(){
  $(this).css("background-color", "pink");
});
});
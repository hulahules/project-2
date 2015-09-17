
$( document ).ready(function() {
    console.log( "ready!" );
    $("#img_two").click(function() {
      console.log( "click!"); 
      $("#img_two").fadeOut("slow", function() {
        $("#img_two").fadeIn("slow");
      });
    });
});

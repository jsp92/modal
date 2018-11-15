( function( $ ) {

  
 $(".accordion").on("click", ".accordion-header", function() {
    $(this).toggleClass("active").next().slideToggle();  
   
 });

$(".open").on("click", function(){
  $(".overlay, .modal").addClass("active");
});

$(".close, .overlay").on("click", function(){
   $(".overlay, .modal").removeClass("active");
});

$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    $(".overlay, .modal").removeClass("active");
  }
});


  
  
} )( jQuery );



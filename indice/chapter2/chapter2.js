
$(document).on("click",function(){
    $(".female").throwable({
        containment: "window",
        drag:true,
        gravity:{x:0,y:1},
        autostart:true,
        damping:-100,
        bounce:0.5,
        collisionDetection: true
    });
});

$(".tog1").hover(function(){
  $('img',this).toggle();
});

$(".aboutButton").click(function(){
  $(".about").toggleClass("show");
});

$(".contactButton").click(function(){
  $(".contact").toggleClass("show");
});

$(".projectButton").click(function(){
  $(".project").toggleClass("show");
});


$(".project2Button").click(function(){
  $(".project2").toggleClass("show");
});


// get width & height of random pane
var pane_width = $(".random-pane").width() - $(".grid-item").width();
var pane_height = $(".random-pane").height() - $(".grid-item").height();

// loop through all the items in the random-pane
$(".random-pane").children().each( function(){

  // get a random x position
  var x = Math.round(Math.random() * pane_width);
  // get a random y position
  var y =  Math.round(Math.random() * pane_height);

  // change the position of the item
  $(this).css("top",y);
  $(this).css("left",x);

  // add hover functionality, to move item to the top on hover
  $(this).on("mouseover",function(){
    // this is a small hack, removing it and adding it again moves it to the top
    $(this).parent().append(this);
  });

});

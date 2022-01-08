var buttoncolors = ["red", "blue", "green", "yellow"];

var gamePattern=[];// computer
var userClickedpattern=[]; //user

var started=false;
var level=0;

$(document).keypress(function() {
  if(!started){
    $("#level-title").text("Level "+ level);
    nextSequence();
    started=true;
  }
});

$(".btn").click(function(){
  var userChosencolor=$(this).attr("id");//1
  userClickedpattern.push(userChosencolor);

  playsound(userChosencolor);
  animatepress(userChosencolor);

  checkAns(userClickedpattern.length-1); // we need to pass index
 });
function checkAns(currentlevel){

if(gamePattern[currentlevel]===userClickedpattern[currentlevel])
{
  if(userClickedpattern.length===gamePattern.length){
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
}
else{

      playsound("wrong");

      $("body").addClass("game-over");
      $("h1").text("Game Over, Press Any Key to Restart");

      setTimeout(function(){
      $("body").removeClass("game-over");
      },200);

      startover();
     }

}

function nextSequence(){
    userClickedpattern=[];
    level++;
    $("#level-title").text("Level " + level);

    var randomno= Math.floor(Math.random()*4);
    var randomcolor=buttoncolors[randomno];

    gamePattern.push(randomcolor);
    $("#"+randomcolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomcolor);
}

function animatepress(currentcolor){

   $("#"+currentcolor).addClass("pressed");

   setTimeout(function(){
   $("#"+currentcolor).removeClass("pressed");
   },100);

}

function playsound(name){
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}

function startover(){
level=0;
gamePattern=[];
started=false;
}

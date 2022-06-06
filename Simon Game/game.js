var gameSequence=[];
var userSequence=[];
var buttonColor=["red", "blue", "yellow", "green"];

function playSound(color)
{
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function animatePress(color)
{
  $("#"+color).css("color","black");
}

function nextSequence()
{
 var randomNumber=Math.random();
 randomNumber=randomNumber*4;
 randomNumber=Math.floor(randomNumber);
 var randomChosenColor=buttonColor[nextSequence()];
 gameSequence.push(randomChosenColor);

 $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
 playSound(randomChosenColour);
}


$(".btn").on("click",function(){
  var userChosenColor=$(this).attr("id");
  userSequence.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
});

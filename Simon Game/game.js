// var gameSequence=[];
// var userSequence=[];
// var buttonColor=["red", "blue", "yellow", "green"];
// var started=false;
// var level=0;
//
// $(document).keypress(function(){
//   if(!started)
//   {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started=true;
//   }
// })
//
// $(".btn").click(function(){
//   var userChosenColor=$(this).attr("id");
//   userSequence.push(userChosenColor);
//   animatePress(userChosenColor);
//   playSound(userChosenColor);
// });
//
// function nextSequence()
// {
//   userPattern = [];
//   level++;
//   $("#level-title").text("Level "+level);
//
//   var randomNumber=Math.random();
//   randomNumber=randomNumber*4;
//   randomNumber=Math.floor(randomNumber);
//   var randomChosenColor=buttonColor[nextSequence()];
//   gameSequence.push(randomChosenColor);
//
//   $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }
//
// //sound
// function playSound(color)
// {
//   var audio = new Audio("sounds/" + color + ".mp3");
//   audio.play();
// }
//
//
// //animation
// function animatePress(color)
// {
//   $("#" + color).addClass("pressed");
//   setTimeout(function () {
//     $("#" + color).removeClass("pressed");
//   }, 100);
// }

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

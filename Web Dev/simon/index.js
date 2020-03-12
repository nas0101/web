
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];


var keyPressed = false;
var gameLevel = 0;

$(document).keypress(function(event) {
  if(keyPressed === false) {
    nextSequence();
    keyPressed = true;
    $("#level-title").text("Level: " + gameLevel);
  }
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
  //console.log(userClickedPattern);
});

function nextSequence() {

  userClickedPattern = [];

  gameLevel++;
  $("#level-title").text("Level: " + gameLevel);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}

function playSound(name) {
  var soundFile = "sounds/" + name + ".mp3";
  var activeSound = new Audio(soundFile);

  activeSound.play();
}

function animatePress(currentColour) {
  var activeButton = $("#" + currentColour);

  activeButton.toggleClass("pressed");

  setTimeout(function() {
    activeButton.toggleClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {

  //$("#level-title").text("Level: " + currentLevel);

  // console.log("Game " + gamePattern[gamePattern.length-1] + " User " + userClickedPattern[userClickedPattern.length-1] + " Level " + currentLevel);

  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    if(gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
      console.log("done");
    }
    
  } else {
    playSound("wrong");
    $("body").toggleClass("game-over");
    $("#level-title").text("Game over, Press any key to restart");
    startOver();

    setTimeout(function() {
      $("body").toggleClass("game-over");
    }, 200);

    console.log("wrong");
  }

}

function startOver() {
  gameLevel = 0;
  gamePattern = [];
  keyPressed = false;
}

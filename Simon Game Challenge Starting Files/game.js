var gameRunning = false;
var userChosenPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber;
var randomChosenColor;
var level = 0;

$(".btn").on("click", function () {
  handler($(this).attr("id"));
});

$(document).on("keydown", function () {
  if (gameRunning === false) {
    gameRunning = true;
    $("h1").text("Level 0");
    nextSequence();
  } else {
    $(document).off();
  }
});

// FUNCTIONS

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  gamePattern.forEach((element) => {
    flashColor(element);
  });

  level++;
  $("h1").text("Level " + level);
}

function flashColor(color) {
  $("#" + color).fadeTo(100, 0.3, function () {
    $(this).fadeTo(500, 1.0);
  });
}

function handler(color) {
  var userChosenColor = color;
  flashColor(color);
  userChosenPattern.push(color);
  playSound(color);
  console.log(color);
}

function playSound(name) {
  var sound = new Audio("./sounds/" + name + ".mp3");
  sound.play();
}

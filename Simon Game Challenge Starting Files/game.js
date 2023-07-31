var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow",];
var randomNumber = nextSequence();
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
console.log(randomChosenColor);

$(".btn").on("click", function () {
    handler(this.)
})

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

function flashColor(color) {
    $('#' + color).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
}

function handler(color) {
    var userChosenColor = color;
}
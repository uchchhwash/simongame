var buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = [];
var userClickedPattern = [];

var gameFlag = false;
var level = 0;

$(document).keypress(function () {
    if (!gameFlag) {
        $("#level-title".text("level" + level))
        nextSequence();
        gameFlag = true;
    }
})

function nextSequence() {
    userClickedPatern = [];
    level += 1;
    var randomNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    var randomChosenColour = buttonColors[nextSequence];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function resultCheck(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000)
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();

    }
}

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    resultCheck(userClickedPattern.length - 1);
})


function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100)
}

function playSound(soundFile) {
    var audio = new Audio("sounds/" + soundFile + ".mp3");
    audio.play();
}
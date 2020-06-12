var buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = [];
var userClickedPattern = [];

var gameFlag = false;
var level = 1;

gamePattern.push(randomChosenColour);

function nextSequence(){
    userClickedPatern = [];
    level += 1;
    var randomNumber = Math.floor(Math.random() * (3 - 0 + 1) ) + 0;
    var randomChosenColour = buttonColors[nextSequence];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
})


function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentColor).removeClass("pressed");
    }, 100)
}

function playSound(soundFile){
    var audio = new Audio("sounds/" + soundFile + ".mp3");
    audio.play();
}
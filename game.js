buttonColors = ["red", "blue", "green", "yellow"]
gamePattern = [];

randomChosenColour = buttonColors[nextSequence];
gamePattern.push(randomChosenColour);

function nextSequence(){
    var rand = Math.floor(Math.random() * (3 - 0 + 1) ) + 0;
    return rand;
}

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
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
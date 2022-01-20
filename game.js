// Declaring variables
var randomNumber = -1;
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = "";
var gamePattern = [];
var userChosenColour = [];
var level = 0;
var started = false;
var myInterval = setInterval(function() {
  $("h1").fadeOut(200).fadeIn(500);
}, 1000);



// Animate the pressed btn
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 200);
}


// To stop heading blinking
function myStopFunction() {
  clearInterval(myInterval);
}


// Animate gameover heading
function animateGameOver() {
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
}


// PLaysound when btn pressed
function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}


// Generate the next color
function nextSequence() {
  myStopFunction();
  userChosenColour = [];
  level++;
  $("h1").text("level " + level);
  randomNumber = Math.floor(Math.random() * 4);


  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("." + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}


// Restart
function restart() {
  level = 0;
  started = false;
  gamePattern = [];
}


// Check ans
function chckAns(currLevel) {
  // success
  if (userChosenColour[currLevel] === gamePattern[currLevel]) {
    if (userChosenColour.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  }
  // gameover
  else {
    playSound("wrong");
    animateGameOver();
    $("h1").text("Game Over, Press Anywhere to Restart");
    myInterval = setInterval(function() {
      $("h1").fadeOut(200).fadeIn(500);
    }, 1000);
    setTimeout(restart, 1000);
  }

}

// Intial press

$(document).click(function() {

  if (started == false) {
    myStopFunction();
    nextSequence();
    started = true;
  }


});

// COntinues the game
$(".btn").click(function(event) {
  userChosenColour.push(event.target.id);
  animatePress(event.target.id);
  playSound(event.target.id);
  console.log(gamePattern);
  console.log(userChosenColour);
  chckAns(userChosenColour.length - 1);

});

var game = {
    count: 0,
    possibleColors: ["#blue", "#green", "#yellow", "#red"],
    currentGame: [],
    player: [],
    sound: {
        blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
        yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
        red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")
    },
    strict: false,
};

function clearGame() {
    game.currentGame = [];
    game.count = 0;
    addCount();
}

function newGame() {
    clearGame();
}

function strict() {
  if (game.strict == false) {
    game.strict = true;
    $("#strict").html("ON").removeClass("btn-info").addClass("btn-danger");
  } else {
    game.strict = false;
    $("#strict").html("OFF").removeClass("btn-danger").addClass("btn-info");
  }
  
  newGame();
}

function allowMoves() {
  var i = 0;
  var moves = setInterval(function(){
    playGame(game.currentGame[i]);
    i++;
    if (i >= game.currentGame.length) {
      clearInterval(moves);
    }
  }, 600);
  
  clearPlayer();
}

function sound(name) {
  switch(name) {
    case "#blue":
      game.sound.blue.play();
      break;
    case "#green":
      game.sound.green.play();
      break;
    case "#yellow":
      game.sound.yellow.play();
      break;
    case "#red":
      game.sound.red.play();
      break;
  }
}

function playGame(field) {
  $(field).addClass("hover");
  sound(field);
  setTimeout(function(){
      $(field).removeClass("hover");
  }, 300);
}

function clearPlayer() {
  game.player = [];
}

function addToPlayer(id) {
  var field = "#"+id;
  console.log(field);
  game.player.push(field);
  playerTurn(field);
} 

function playerTurn(x) {
  if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
    if(game.strict){
      alert("Hard Luck...Start Again!");
      newGame();
    } else {
      alert("Unlucky...Try Again!");
      allowMoves();
    }
   } else {
      console.log("Well Done...Keep it up!");
      sound(x);
      var check = game.player.length === game.currentGame.length;
      if (check) {
        if(game.count == 20){
          alert("You have completed the game...Congratulations!!!");
          clearGame();
        } else {
          alert('Next Round!');
          nextRound();
        }
      }
    }
} 

function nextRound() {
  addCount();
}

function makeAMove(){
  game.currentGame.push(game.possibleColors[(Math.floor(Math.random()*4))]);
  allowMoves();
}

function addCount() {
  game.count++;
  $('#clickNumber').addClass('animated fadeOutDown');
  
  setTimeout(function(){
    $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
  }, 300);
  
  makeAMove();
}

newGame();

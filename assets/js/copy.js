var game = {
  count: 0,
  possibleColors: ["#blue", "#green", "#yellow", "#red"],
  currentGame: [],
  player: [],
  sound: {
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")
  },
  strict: false,
};

var startButton = document.querySelector('#start');

startButton.onclick = function() {
  start();
};

function start() {
  game.currentGame = [];
  game.count = 0;
  makeAMove();
}

function clearGame() {
  game.currentGame = [];
  game.count = 0;
}

function newGame() {
  game.count = 0;
  $('#clickNumber').addClass('animated fadeOutDown');

  setTimeout(function() {
    $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
  }, 300);
  clearGame();
}

function strict() {
  if (game.strict == false) {
    game.strict = true;
    $("#strict").html("Strict ON").css("color", "#3632ea");
  }
  else {
    game.strict = false;
    $("#strict").html("Strict OFF").css("color", "black");
  }

  newGame();
}

function allowMoves() {
  var i = 0;
  var moves = setInterval(function() {
    playGame(game.currentGame[i]);
    i++;
    if (i >= game.currentGame.length) {
      clearInterval(moves);
    }
  }, 700);

  clearPlayer();
}

function sound(name) {
  switch (name) {
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
  setTimeout(function() {
    $(field).removeClass("hover");
  }, 300);
}

function clearPlayer() {
  game.player = [];
}

function addToPlayer(id) {
  var field = "#" + id;
  console.log(field);
  game.player.push(field);
  playerTurn(field);
}

function playerTurn(x) {
  if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
    if (game.strict) {
      swal({
        title: "Hard Luck!",
        text: "Start Again",
        icon: "error",
        button: "Ok",
      });
      newGame();
    }
    else {
      alert("Unlucky...Try Again!");
      allowMoves();
    }
  }
  else {
    console.log("Well Done...Keep it up!");
    sound(x);
    var check = game.player.length === game.currentGame.length;
    if (check) {
      if (game.count == 20) {
        alert("You have completed the game...Congratulations!!!");
        newGame();
      }
      else {
        swal({
          title: "Well Done!",
          text: "Next Round",
          icon: "success",
          button: false,
          timer: 500,
        });
        nextRound();
      }
    }
  }
}

function nextRound() {
  addCount();
}

function makeAMove() {
  game.currentGame.push(game.possibleColors[(Math.floor(Math.random() * 4))]);
  allowMoves();
}

function addCount() {
  game.count++;
  $('#clickNumber').addClass('animated fadeOutDown');

  setTimeout(function() {
    $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
  }, 300);

  makeAMove();
}

newGame();

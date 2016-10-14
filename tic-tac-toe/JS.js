function startGame () {
  document.turn = "X";

  setMessage(document.turn + " gets to start now.");
}

function setMessage (msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove (square) {
  if (square.innerText == "") {
    square.innerText = document.turn;
    switchTurn();
  } else {
    setMessage ("This square has already used.")
  }
}

function switchTurn () {
  if (checkForWinner(document.turn)) {
    setMessage("Congratulations, " + document.turn + "! You win!");
  } else if (document.turn == "X") {
    document.turn = "O";
    setMessage("It's " + document.turn + "'s move.");
  } else {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s move.");
  }
}

function getBox(number) {
  return document.getElementById("s" + number).innerText;
}

function checkRow (a, b, c, move) {
  var result = false;
  if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true;
  }
  return result;
}

function checkForWinner(move) {
  var result = false;
  if (checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move)) {
    result = true;
  }
  return result;
}

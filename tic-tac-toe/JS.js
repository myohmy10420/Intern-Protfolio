function startGame () {
  document.turn = "X";

  setMessage(document.turn + " gets to start now.");
}

function setMessage (msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove (square) {
  square.innerText = document.turn;
}

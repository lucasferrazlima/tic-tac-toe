/* eslint-disable prefer-const */

let board = [
  '', '', '',
  '', '', '',
  '', '', '',
];

const cells = document.querySelectorAll('[data-cell]');

function createPlayer(playerName, marker) {
  return {
    playerName,
    marker,
  };
}

const playerOne = createPlayer('One', 'x');
const playerTwo = createPlayer('Two', 'o');

let currentPlayer = playerOne;

function startGame() {
  cells.forEach((cell) => {
    cell.addEventListener('click', getClick, { once: true });
  });
}

// Function for assigning markers to board and for game flow in general
function getClick(e) {
  // place marker on board
  const cell = e.target;
  cell.textContent = currentPlayer.marker;
  const cellIndex = Array.prototype.indexOf.call(cells, cell);
  board[cellIndex] = currentPlayer.marker;

  // check for win
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
    if (board[0] === 'x') {
      endGame(playerOne.playerName);
    } else {
      endGame(playerTwo.playerName);
    }
  } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
    if (board[0] === 'x') {
      endGame(playerOne.playerName);
    } else {
      endGame(playerTwo.playerName);
    }
  } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
    if (board[2] === 'x') {
      endGame(playerOne.playerName);
    } else {
      endGame(playerTwo.playerName);
    }
  } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
    if (board[6] === 'x') {
      endGame(playerOne.playerName);
    } else {
      endGame(playerTwo.playerName);
    }
  } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {
    if (board[0] === 'x') {
      endGame(playerOne.playerName);
    } else {
      endGame(playerTwo.playerName);
    }
  } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
    if (board[2] === 'x') {
      endGame(playerOne.playerName);
    } else {
      endGame(playerTwo.playerName);
    }
  } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
    if (board[3] === 'x') {
      endGame(playerOne.playerName);
    } else {
      endGame(playerTwo.playerName);
    }
  } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
    if (board[1] === 'x') {
      endGame(playerOne.playerName);
    } else {
      endGame(playerTwo.playerName);
    }
  }

  // check for draw
  allFilled = false;
  let count = 0;
  board.forEach((element) => {
    if (element !== '') {
      count += 1;
    }
    if (gameOver === false && count === 9) {
      drawGame();
    }
  });

  function drawGame() {
    gameOver = true;
    console.log("It's a draw!");
  }

  // switch players
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }
}

// for dealing with end of game
let gameOver = false;

function endGame(winningPlayer) {
  gameOver = true;
  console.log(`${winningPlayer} wins !`);
}

startGame();

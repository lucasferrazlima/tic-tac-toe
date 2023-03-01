/* eslint-disable no-use-before-define */
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
  gameOver = false;
  cells.forEach((cell) => {
    while (cell.firstChild) {
      cell.removeChild(cell.firstChild);
    }
    cell.addEventListener('click', getClick, { once: true });
  });
}

// Function for assigning markers to board and for game flow in general
function getClick(e) {
  // Assigning icons - it must be assigned inside getClick, otherwise the same element...
  // ...will be appended to the other cells (making it disappear from previous cells)
  const cell = e.target;
  const xIcon = document.createElement('i');
  xIcon.classList.add('material-icons-outlined', 'x-icon');
  xIcon.textContent = 'close';

  const oIcon = document.createElement('i');
  oIcon.classList.add('material-icons-outlined', 'o-icon');
  oIcon.textContent = 'circle';

  // place marker on board
  if (currentPlayer.marker === 'x') {
    cell.appendChild(xIcon);
  } else if (currentPlayer.marker === 'o') {
    cell.appendChild(oIcon);
  }

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
  let count = 0;
  board.forEach((element) => {
    if (element !== '') {
      count += 1;
    }
    if (gameOver === false && count === 9) {
      drawGame();
    }
  });

  // switch players
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }
}

// for dealing with end of game
let gameOver = false;

const endingMessage = document.getElementById('ending-message');

const restartButton = document.createElement('button');
restartButton.classList.add('restart');
restartButton.id = 'restart';
restartButton.textContent = 'New game';

function endGame(winningPlayer) {
  gameOver = true;
  endingMessage.classList.add('show');
  endingMessage.textContent = `${winningPlayer} wins!`;
  endingMessage.appendChild(restartButton);
  overlay.classList.remove('hidden');
}

function drawGame() {
  gameOver = true;
  endingMessage.classList.add('show');
  endingMessage.textContent = 'It\'s a draw!';
  endingMessage.appendChild(restartButton);
  overlay.classList.remove('hidden');
}

// Pop up for players' names and start button
const initialMessage = document.getElementById('initial-message');
const startButton = document.getElementById('start');
const overlay = document.getElementById('overlay');
const oneInput = document.getElementById('playerOne');
const twoInput = document.getElementById('playerTwo');

startButton.addEventListener('click', () => hideMessage(initialMessage, overlay));

function hideMessage(message, overlay) {
  if (oneInput.value === '' || twoInput.value === '') {
    oneInput.classList.add('missing');
    twoInput.classList.add('missing');
  } else {
    message.classList.add('hidden');
    overlay.classList.add('hidden');
    playerOne.playerName = document.getElementById('playerOne').value;
    playerTwo.playerName = document.getElementById('playerTwo').value;
    startGame();
  }
}

// For dealing with game restart
function restartGame() {
  board = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];
  cells.forEach((cell) => {
    while (cell.firstChild) {
      cell.removeChild(cell.firstChild);
    }
  });
  endingMessage.classList.remove('show');
  overlay.classList.add('hidden');
  startGame();
}

restartButton.addEventListener('click', restartGame);

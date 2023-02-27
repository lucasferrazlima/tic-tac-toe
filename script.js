/* eslint-disable prefer-const */

function gameBoard() {
  let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  const getBoard = () => board;

  const updateBoard = (firstIndex, secondIndex, marker) => {
    board[firstIndex][secondIndex] = marker;
  };

  function gameRestart() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  return {
    getBoard,
    updateBoard,
    gameRestart,
  };
}

function gameFlow(currentPlayer) {

}

function players(name, marker) {
  return {
    name,
    marker,
  };
}

function chessBoard(board) {
  var king = [];
  var others = [];
  var othersLocations = [];

  for (let row of board) {
    for (let square of row) {
      if (square === "♔") {
        king.push(board.indexOf(row), row.indexOf(square));
      } else if (square != " ") {
        others.push(square);
        othersLocations.push([board.indexOf(row), row.indexOf(square)]);
      }
    }
  }
  console.log(othersLocations, others);

  for (let player of others) {
    if (player === "♝") {
      //Bishop only runs diagonally;
    } else if (player === "♛") {
      // Queen runs fwd bckwd diagonally
    } else if (player === "♞") {
      // Knight diagonally one step and fwd and bckwd and sideways alternate steps;
    }
  }

  check(king, board);
}

function check(king, board) {
  let row = king[0];
  let col = king[1];
}

console.log(
  chessBoard([
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", "♟", " ", " ", " ", " "],
    [" ", " ", "♔", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "]
  ])
);

function sudoku(board) {
  var set = board[0].map((e, i) => (i += 1));
  var fact = Math.pow(set.length, 1 / 2);

  console.log(fact);

  // Validationg each column;

  for (let col of board) {
    let temp = [...set];

    for (let element of col) {
      if (temp.includes(element)) {
        temp.splice(temp.indexOf(element), 1);
      } else {
        return false;
      }
    }
  }

  //Validating each row

  for (let i = 0; i < board.length; i++) {
    let temp = [...set];

    for (let j = 0; j < board.length; j++) {
      if (temp.includes(board[j][i])) {
        temp.splice(temp.indexOf(board[j][i]), 1);
      } else {
        return false;
      }
    }
  }

  let x = 0;
  for (let m = 0; m < board.length; m += fact) {
    for (let i = 0; i < board.length; i += fact) {
      let temp = [...set];

      for (let k = m; k < m + fact; k++) {
        for (let l = i; l < i + fact; l++) {
          if (temp.includes(board[k][l])) {
            temp.splice(temp.indexOf(board[k][l]), 1);
          } else {
            return false;
          }
        }
      }
    }
  }

  console.log("x is ", x);
  return true;
}

console.log(
  sudoku([
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],

    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],

    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4],
  ])
);

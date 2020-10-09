function matrixAddition(a, b) {
  return a.map((a1, i) => a1.map((a2, j) => a2 + b[i][j]));
}

console.log(
  matrixAddition(
    [
      [1, 2],
      [1, 2],
    ],
    [
      [2, 3],
      [2, 3],
    ]
  )
);

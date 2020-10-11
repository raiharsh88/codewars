function solve(n) {
  let num = 1;

  while (num <= n) {
    let square = num ** 2;
    if (Number.isInteger(Math.sqrt(square + n))) return square;
    else num++;
  }

  return -1;
}

console.log(solve(17));

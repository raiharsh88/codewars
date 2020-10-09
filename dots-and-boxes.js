function dotsAndBoxes(arr) {
  arr = arr.map((a) => a.sort((a, b) => a - b));
  let n = 0;

  //Find N for the game.
  arr.forEach((a) => (a[1] - a[0] > 1 ? (n = a[1] - a[0]) : (n = 1)));

  return getSides([0, 1], n);
}

function getSides(side, n) {
  let bound = n * n - 1;
  let sides = [side];
  if (side[1] - side[0] == 1) {
    sides.push();
  }
  return side;
}

console.log(
  dotsAndBoxes([
    [0, 1],
    [7, 8],
    [1, 2],
    [6, 7],
    [0, 3],
    [8, 5],
    [3, 4],
    [4, 1],
    [4, 5],
    [2, 5],
    [7, 4],
    [3, 6],
  ])
);

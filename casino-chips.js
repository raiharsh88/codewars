function solve(arr) {
  arr = arr.sort((a, b) => a - b);

  days = arr.shift();

  arr = arr.sort((a, b) => a - b);

  return days;
}

console.log(solve([12, 12, 12]));

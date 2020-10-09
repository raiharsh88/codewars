function solve(arr) {
  arr = arr.sort((a, b) => b - a);
  let days = 0;
  while (true) {
    let coin = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && coin < 2) {
        coin++;
        arr[i]--;
      }
    }
    console.log(arr, coin, days);

    arr = arr.sort((a, b) => b - a);
    if (coin < 2) break;
    days++;
  }

  return days;
}

console.log(solve([1, 6, 9]));

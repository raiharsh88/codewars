function solve(arr) {
  if (arr.length == 1) return "23:59";
  arr = arr
    .map((a) => a.split(":").reduce((t, n) => parseInt(t) * 60 + parseInt(n)))
    .sort((a, b) => a - b);
  let diff = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i + 1] - arr[i] > diff) diff = arr[i + 1] - arr[i];
  }
  if (1440 - arr[arr.length - 1] + arr[0] > diff)
    diff = 1440 - arr[arr.length - 1] + arr[0];

  diff -= 1;

  diff =
    Math.floor(diff / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (diff % 60).toString().padStart(2, "0");

  return diff;
}

console.log(solve(["21:14", "15:34", "14:51", "06:25", "15:30"]));

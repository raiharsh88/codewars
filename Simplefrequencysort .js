function solve(arr) {
  arr = arr.sort((a, b) => a - b);

  let numberArr = [];
  let frequencyArr = [];

  for (let n of arr) {
    if (numberArr.indexOf(n) == -1) {
      numberArr.push(n);
      frequencyArr.push(1);
    } else {
      frequencyArr[numberArr.indexOf(n)] += 1;
    }
  }

  let finalArr = [];
  while (numberArr.length > 0) {
    let idx = frequencyArr.indexOf(Math.max(...frequencyArr));

    for (let i = 0; i < Math.max(...frequencyArr); i++) {
      finalArr.push(numberArr[idx]);
    }
    numberArr.splice(idx, 1);
    frequencyArr.splice(idx, 1);
  }

  return finalArr;
}

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));

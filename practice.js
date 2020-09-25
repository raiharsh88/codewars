function solve(a, b) {
  var count = 0;
  for (let x = a; x < b; x++) {
    if (isPrime(x)) {
      if (reducer(x)) count += 1;
    }
  }

  return count;
}

let reducer = function (num) {
  let coll = [];
  while (true) {
    num = num.toString().split("");
    let acc = 0;
    for (let i = 0; i < num.length; i++) {
      acc = acc + Math.pow(parseInt(num[i]), 2);
    }
    num = acc;
    if (coll.indexOf(acc) != -1) {
      return false;
    } else if (num == 1) {
      return true;
    }
    coll.push(acc);
  }
};

function isPrime(n) {
  if (n == 1) return false;
  let sqrt = Math.sqrt(n);
  for (let i = 2; i < sqrt; i++) {
    if (n % i == 0) return false;
  }

  return n > 1;
}
console.log(solve(48, 1651));
// console.log(isPrime(48));

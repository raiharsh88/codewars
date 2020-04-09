function next(n) {
  let l = n.toString().length;
  let condition = true;
  n = parseInt(n) + 1;
  var subs = n + l;

  while (!Number.isInteger(n / l)) {
    let i = 1;
    while (i <= l) {
      var num = parseInt(n.toString().slice(0, i));
      condition = Number.isInteger(num / i) == true ? true : false;
      i++;
      if (!condition) break;
    }
    n++;
  }
  var y = l;
  var t = 1;

  while (true) {
    let i = l;

    var x = 0;
    while (t - y < 1) {
      x++;
      t *= 10;
    }
    var diff = i - x;
    while (i - x > 0) {
      var num = parseInt(n.toString().slice(0, i));

      condition = Number.isInteger(num / i) == true ? true : false;
      i--;
      if (!condition) break;
    }
    if (condition) break;
    n += l;
    y += y;
    console.log("this", n);
  }

  return BigInt(n);
}

console.log(next(1234n));

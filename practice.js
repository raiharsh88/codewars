function decomposer(n) {
  if (n <= 2) {
    return null;
  }
  var composers = [];
  let diff = Math.pow(n, 2);
  var number = n - 1;

  while (diff) {
    var n2 = Math.pow(number, 2);
    if (n2 <= diff) {
      if (composers.indexOf(number) === -1) {
        composers.push(number);
        diff = diff - n2;

        number = Math.floor(Math.pow(diff, 1 / 2)) + 5;
      } else {
        number = composers[composers.length - 3] - 1;
        composers.splice(composers.length - 3);
        diff = n * n;

        composers.forEach(ele => (diff = diff - ele * ele));
      }
    } else {
      number--;
    }
    //  console.log("d & n", diff, number);

    if (number < 0) {
      diff = Math.pow(n, 2);
      number = composers[0] - 1;
      composers = [];
    }
  }

  return composers.reverse();
}

console.log(decomposer(50));

let base = [1];
function convergence(n) {
  getBase(n + 1);
  let sequence = [n];

  while (sequence[sequence.length - 1] != base[base.length - 1]) {
    sequence.push(genNext(sequence[sequence.length - 1]));
    getBase(sequence[sequence.length - 1]);
  }
  console.log(sequence, base);

  return sequence.length - 1;
}

function getBase(current) {
  while (current > base[base.length - 1]) {
    base.push(genNext(base[base.length - 1]));
  }
}

function genNext(last) {
  if (last < 9) return last * 2;
  last =
    last +
    last
      .toString()
      .split("")
      .reduce((a, c) => (c == "0" ? parseInt(a) : parseInt(a) * parseInt(c)));
  return last;
}
console.log(convergence(15));

function editor(input) {
  var arr = [];
  //  console.log("okkk", input);

  input.push([]);
  input.forEach((e, i) => (arr = arr.concat(e)));
  input = [...arr];

  arr = [];
  for (let n of input) {
    input.forEach((e, i) => {
      // console.log(n, e);

      Math.abs(n - e) === 2 ? arr.push([n, e]) : true;
    });
  }

  for (let one of arr) {
    one.sort();
  }

  arr = arr.filter(((t = {}), a => !(t[a] = a in t)));
  //arr.sort();
  return arr;
}

console.log(editor([1, 3, 4, 6, 5]));
[
  [1, 3],
  [3, 5],
  [4, 6]
];

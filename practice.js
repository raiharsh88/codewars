function pyramid(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < Math.ceil((n - (i + 1)) / 2); j++) {
      str += " ";
    }

    for (let j = 0; j < i + 1; j++) {
      str += "*";
    }
    for (let j = 0; j < Math.floor((n - (i + 1)) / 2); j++) {
      str += " ";
    }
    console.log(i);
    array.push(str);
  }

  return array;
}

console.log(pyramid(7));

function nextBigNumber(number) {
  number = number.toString().split("");

  number = number.map((n) => parseInt(n));

  let collection = [];

  for (let k = 0; k < number.length; k++) {
    let current = number[k];
    let cpy = [...number];

    cpy.splice(k, 1);
    for (let i = 0; i < number.length; i++) {
      let temp = [...cpy];

      temp.splice(i, 0, current);

      temp = parseInt(temp.join(""));
      //console.log(current, temp, cpy);

      if (temp > parseInt(number.join(""))) collection.push(temp);
    }
  }

  return collection.find((n) => n === 59884848483559);

  return collection;
  if (collection.length < 1) return null;
  return Math.min(...collection);
}

console.log(nextBigNumber(59884848459853));

//        2017 => 2071

function addArrays(array1, array2) {
  let sign = true;
  if (array1.length == 0) array1.push(0);
  if (array2.length == 0) array2.push(0);
  return (parseInt(array1.join("")) + parseInt(array2.join("")))
    .toString()
    .split("")
    .filter((e) => (e != "-" ? true : (sign = false)))
    .map((e, i) => (i == 0 && !sign ? parseInt("-" + e) : parseInt(e)));
}

// console.log(addArrays([-6, 7], [1, 0]));
console.log(parseInt([].join("")) + 1);

function isTriangleNumber(number) {
  let row = 1;
  while (number > 0) {
    number -= row;
    row++;
  }

  return number == 0 ? true : false;
}

console.log(isTriangleNumber(10));

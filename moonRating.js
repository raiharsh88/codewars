//5Kyu problem

let moonRating = (r) => {
  let f = Math.floor(r / 2);
  return "o".repeat(r / 2 - f >= 0.75 ? f + 1 : f).padEnd(5, "x");
};

console.log(moonRating(9));

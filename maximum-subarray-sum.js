var maxSequence = function (arr) {
  let sum = 0,
    coll = [0];

  for (let i = 0; i < arr.length - 1; i++) {
    sum = Math.max(sum + arr[i], arr[i]);
    coll.push(sum);
  }

  return Math.max(...coll);
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //

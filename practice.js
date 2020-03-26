function EvenOdd(points) {
  var count = 0;
  var dupes = [...points];
  var smallest = 1000000;
  var final = [];
  for (let point of points) {
    dupes.splice(0, 1);
    let diff = 500;
    dupes.forEach(element => {
      // if (diff == 0) {
      //   //console.log("hdhdhdhdhh");
      //   return false;
      // }
      diff = Math.abs(element[0] - point[0]) + Math.abs(point[1] - element[1]);
      count++;
      if (diff < smallest) {
        final[0] = element;
        final[1] = point;
        smallest = diff;
      }

      console.log(element, point, diff);
    });

    //dupes.push(point);
  }
  console.log(count);
  return final;
}

console.log(
  EvenOdd([
    [2, 2], // A
    [2, 8], // B
    [5, 5], // C
    [5, 5], // C
    [6, 3], // D
    [6, 7], // E
    [7, 4], // F
    [7, 9] // G
  ])
);

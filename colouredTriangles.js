function triangle(row) {
  row = row.split("");

  while (row.length > 1) {
    let str = "";
    let result = [];
    for (let i = 0; i <= row.length - 2; i++) {
      str = row[i] + row[i + 1];
      if (row[i] == row[i + 1]) {
        result.push(row[i]);
      } else if (str.indexOf("R") == -1) {
        result.push("R");
      } else if (str.indexOf("G") == -1) {
        result.push("G");
      } else if (str.indexOf("B") == -1) {
        result.push("B");
      }
    }
    row = result;
  }

  return row.join("");
}

console.log(triangle("GRB"));

let x = [0, 123];

x = [12];
console.log(x);

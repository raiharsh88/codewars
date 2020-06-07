var collection = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function locator(str) {
  var total = 0;
  str = str.toLowerCase();
  str = str.split("");

  var col = str.map(element => collection.indexOf(element) + 1);

  var count = [];
  console.log("col is", col);

  while (col.length > 0) {
    var temp = [];
    var num = col[0];
    col.splice(0, 1);
    temp = col.filter(e => (e < num ? e : 0));
    count.push(temp.length);
  }

  var k = count.length - 1;
  var d = 0;

  console.log("count is", count);
  var denominators = get(str);
  console.log("repeat methd");
  for (let n of count) {
    total += (n * Factorial(k)) / denominators[d];
    k--;
    d++;
  }

  total++;

  return total;
}



function Factorial(n) {
  var ans = 1;

  for (var i = 2; i <= n; i++) ans = ans * i;
  return ans;
}


console.log(locator("IMMUNOELECTROPHORETICALLY"));

function get(myArr) {
  var f = [];
  var bl = [];
  var newArr = [];
  var lst = [];

  while (myArr.length > 0) {
    newArr = [...myArr];
    lst = [];
    var done = [];

    for (let ltr of newArr) {
      if (done.indexOf(ltr) === -1) {
        done.push(ltr);
        f = newArr.filter((e, idx) => e === ltr);
        if (f.length > 1) {
          lst.push(f.length);
        }
      }
    }
    bl.push(lst);

    myArr.splice(0, 1);
  }

  for (let ar of bl) {
    var mul = 1;

    for (let n of ar) {
      mul = mul * Factorial(n);
    }

    bl[bl.indexOf(ar)] = mul;
  }

  return bl;
}


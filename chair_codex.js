// 5 3
// RLR
// 5
// 1
// 2
// 3
// 4
// 5
// Sample Output:
// 2
// -1
// 1
// -1
// 3

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var arr = "";
process.stdin.on("data", function (chunk) {
  arr += chunk;
});
process.stdin.on("end", function () {
  myFunction(arr);
});

function myFunction(data) {
  data = data.split("\n");
  let chairs = new Array(parseInt(data.shift().split(" ").shift())).fill("#");
  let people = data.shift().split("");
  let idx = 1;
  for (let p of people) {
    //     let temp = chairs.join("").split("!");

    //     for (let t of temp) {
    //       if (t.length > longest) {
    //         longest = t.length;
    //       }
    //     }

    let a = 1;
    let b = 1;
    let f1 = 1;
    let f2 = 1;

    let k = a;
    while (k <= chairs.length) {
      //   console.log(chairs[k - 1]);

      if (chairs[k - 1] !== "#") {
        a = k + 1;
        b = k + 2;

        k++;
      } else {
        k += 1;

        b = k;
      }

      if (b - a > f2 - f1) {
        f1 = a - 1;
        f2 = b - 1;
      }

      //   console.log(a, b, f1, f2, k, chairs[k - 1]);
    }

    let longest = f2 - f1;

    // console.log(f2, f1, "Longest");
    if (longest % 2 === 1) {
      pos = Math.ceil(longest / 2) - 1;
    } else {
      if (p === "L") {
        pos = longest / 2 - 1;
      } else {
        pos = longest / 2;
      }
    }

    pos = pos + f1;

    chairs[pos] = idx;
    // console.log(pos);

    idx++;
  }

  data.shift();

  for (let d of data) {
    if (chairs[parseInt(d) - 1] === "#") {
      console.log(-1);
    } else {
      console.log(chairs[parseInt(d) - 1]);
    }
  }

  //   return chairs;
}

myFunction(`5 3
RLR
5
1
2
3
4
5`);

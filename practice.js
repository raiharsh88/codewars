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
  data = data.split("\n").slice(1);
  for (let d of data) {
    let enough = true;
    d.split("*").map((c, i) => {
      if (i == 0 && c !== "") {
        enough = false;
      } else if (i > 0 && c.length > 2) {
        enough = false;
      }
    });

    console.log(enough ? "YES" : "NO");
  }
}

myFunction(`2
0*0*00
*00*00
*00*00*0`);

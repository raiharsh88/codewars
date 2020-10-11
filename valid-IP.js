function isValidIP(str) {
  let coll = [];
  for (let i = 0; i < 256; i++) {
    coll.push(i.toString());
  }

  let regex = /{0-255}/;
  return str.split(".").filter((n) => coll.indexOf(n) != -1).length == 4
    ? true
    : false;
}

console.log(isValidIP("137.255.156.100"));

console.log(parseInt(2e2));

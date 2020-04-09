const isPolydivisible = (s, b) => {
    let temp = dictionary.indexOf(s[0]);
    for (let i = 1, l = s.length; i < l; i++) {
      temp = temp * b + dictionary.indexOf(s[i]);
      if (temp % (i + 1) !== 0) return false;
    }
    return true;
  };
  
  const getPolydivisible = (n, b) => {
    let res = ["0"],
      i = 1;
    while (res.length < n) {
      let s = "";
      let num = i;
      while (num > 0) {
        s += dictionary[num % b];
        num = Math.floor(num / b);
      }
      s = s.split``.reverse().join``;
      if (isPolydivisible(s, b)) res.push(s);
      i += 1;
    }
    return res[n - 1];
  };
  
  const dictionary =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
  console.log(getPolydivisible(42, 16));
  
function parseBankAccount(text) {
  text = text.split("\n");
  text = text.map((line) => {
    return line.split("");
  });
  let str = "";
  let acNo = "";
  text[0].forEach((ltr, idx) => {
    str = "";
    if (
      ltr === " " &&
      text[0][idx + 1] != "_" &&
      text[1][idx - 1] != "_" &&
      text[0][idx - 1] != "_"
    ) {
      str += text[1][idx] + text[2][idx];
    }
    if (str == "||") acNo += "1";
    else {
      str = "";
      if (ltr == "_") str += "a";
      if (text[1][idx + 1] == "|") str += "b";
      if (text[2][idx + 1] == "|") str += "c";
      if (text[2][idx] == "_") str += "d";
      if (text[2][idx - 1] == "|") str += "e";
      if (text[1][idx - 1] == "|") str += "f";
      if (text[1][idx] == "_") str += "g";
    }

    if (str === "abdeg") acNo += "2";
    else if (str === "abcdg") acNo += "3";
    else if (str === "bcfg") acNo += "4";
    else if (str === "acdfg") acNo += "5";
    else if (str === "acdefg") acNo += "6";
    else if (str === "abc") acNo += "7";
    else if (str === "abcdefg") acNo += "8";
    else if (str === "abcdfg") acNo += "9";
    else if (str === "abcdef") acNo += "0";
  });

  return parseInt(acNo);
}

console.log(
  parseBankAccount(
    "    _  _     _  _  _  _  _ \n" +
      "  | _| _||_||_ |_   ||_||_|\n" +
      "  ||_  _|  | _||_|  ||_| _|\n"
  )
);

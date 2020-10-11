String.prototype.trim = function () {
  let str = this;
  while (str.charAt(0) == " ") {
    str = str.split("").slice(1).join("");
  }
  while (str.charAt(str.length - 1) == " ") {
    str = str
      .split("")
      .slice(0, str.length - 1)
      .join("");
  }

  return str;
};

console.log("test ".trim());

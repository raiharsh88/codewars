var calc = function (expression) {
  if (!isExp(expression)) return parseInt(expression);
  expression = expression
    .split("(")
    .join("p")
    .split(")")
    .join("p")
    .split("p")
    .filter((e) => e != "")
    .map((e) => e.trim());

  for (let i = 0; i < expression.length; i++) {
    let sign = 0;
    let exp = expression[i];

    let d = exp.indexOf("/");
    let m = exp.indexOf("*");
    let n1 = 0;
    let n2 = 0;

    console.log(n1);
  }

  return expression;
};

function operate(n1, n2, sign) {
  if (sign == "+") return parseInt(n1) + parseInt(n2);

  if (sign == "/") return parseInt(n1) / parseInt(n2);

  if (sign == "*") return parseInt(n1) * parseInt(n2);
  if (sign == "-") return parseInt(n1) - parseInt(n2);
}
function isExp(term) {
  term
    .split("")
    .filter(
      (t, i, arr) =>
        t == "+" ||
        t == " " ||
        (t == "-" && arr[i + 1] == " ") ||
        t == ")" ||
        t == "(" ||
        t == "*" ||
        t == "/"
    ).length > 0
    ? true
    : false;

  return term.length;
}
console.log(
  calc("((((((((((((((((((((2 /2+3)))))))))))))))) * ((((4.33 - -6))))))))")
);
console.log(2 / 2 + 3 * 4.75 - -6);

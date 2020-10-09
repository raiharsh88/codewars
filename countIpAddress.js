function ipsBetween(start, end) {
  const count = (num) =>
    num
      .split(".")
      .reverse()
      .map((c, i) => 256 ** i * parseInt(c))
      .reduce((a, c) => a + c);

  return count(end) - count(start);
}

console.log(ipsBetween("20.0.0.10", "20.0.1.0"));

function sumFracts(l) {
  function gcd(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    console.log(max, min);

    return max % min === 0 ? min : gcd(max % min, min);
  }

  function add([numer1, denom1], [numer2, denom2]) {
    const numer = numer1 * denom2 + numer2 * denom1;
    const denom = denom1 * denom2;
    const g = gcd(numer, denom);

    return [numer / g, denom / g];
  }

  if (l.length === 0) return null;

  const [numer, denom] = l.reduce(([numer1, denom1], [numer2, denom2]) =>
    add([numer1, denom1], [numer2, denom2])
  );

  return numer % denom === 0 ? numer / denom : [numer, denom];
}

console.log(
  sumFracts([
    [1, 2],
    [1, 3],
    [1, 4],
  ])
);

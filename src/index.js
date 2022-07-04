module.exports = function reverse(n) {
  let nReverse = 0;

  if (n > 0) {
    while (n != 0) {
      nReverse *= 10;
      nReverse += n % 10;
      n -= n % 10;
      n /= 10;
    }
  } else if (n < 0) {
    n = -n
    while (n != 0) {
      nReverse *= 10;
      nReverse += n % 10;
      n -= n % 10;
      n /= 10;
    }
  }

  return nReverse;
}

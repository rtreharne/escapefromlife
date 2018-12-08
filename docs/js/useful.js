function randomInt(min, max) {
  // retunr n random integers
  // in the range [min, max]
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomInts(n, min, max) {
  var nList = [];
  for (i = 0; i < n; i++) {
    nList.push(randomInt(min, max));
  }
  return nList;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function gcd(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

function gcf(a, b) {
  d = gcd(a, b);
  return [a/d, b/d]
}

function randomItem(a) {
  return a[Math.floor(Math.random()*a.length)];
}

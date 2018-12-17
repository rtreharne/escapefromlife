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

function plusOrMinus() {
  return randomItem([function(a, b){ return a+b}, function(a, b){ return a-b}])
}

function timesOrDivide() {
  return randomItem([function(a, b){ return a*b}, function(a, b){ return a/b}])
}

function fractionSum(a, b) {
  return [b[0]*a[1] + a[0]*b[1], a[1]*b[1]]
}

function pcFromInt (int) {
  if (int == 1) {
    int = 1.1;
  }
  return Math.floor((1.0/int)*100);
}

function roundTo(value, dp) {
  return Math.round(value*100)/100
}

function sigFig(value, sf) {
  return parseFloat(value.toPrecision(sf));
}

function getSigFig (value) {
  return value
      .toExponential()
      .replace(/e[\+\-0-9]*$/, '')  // remove exponential notation
      .replace( /^0\.?0*|\./, '')    // remove decimal point and leading zeros
      .length
};

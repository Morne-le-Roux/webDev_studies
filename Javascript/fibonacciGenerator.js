function fibonacciGenerator(n) {
  var seq = [];

  if (n === 1) {
    seq.push(0);
  } else {
    if (n === 2) {
      seq.push(0);
      seq.push(1);
    } else {
      seq.push(0);
      seq.push(1);
      while (seq.length < n) {
        seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
      }
    }
  }
  console.log(seq);
}

fibonacciGenerator(10);

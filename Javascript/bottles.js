for (var i = 99; i > 0; i--) {
  if (i > 1) {
    console.log(
      i +
        " bottles of beer on the wall. " +
        i +
        " bottles of beer. Take one down, pass it around, " +
        (i - 1) +
        " bottles of beer left on the wall."
    );
  } else {
    console.log(
      i +
        " bottles of beer on the wall. " +
        i +
        " bottles of beer. Take one down, pass it around, no more bottles of beer left on the wall."
    );
  }
}

function plusMinus(arr) {
  const n = arr.length;
  let pos = 0;
  let neg = 0;
  let zero = 0;

  for (let val of arr) {
    if (val === 0) zero++;
    if (val < 0) neg++;
    if (val > 0) pos++;
  }

  console.log((pos / n).toPrecision(6));
  console.log((neg / n).toPrecision(6));
  console.log((zero / n).toPrecision(6));
}

const arr = [-9, 2, 3, 0, 0, -11, 2, 5, 1, 0];

plusMinus(arr);

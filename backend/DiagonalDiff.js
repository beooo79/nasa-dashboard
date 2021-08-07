const { randomInt } = require("crypto");

function calculateDiagonals(arr) {
  // sum primary diagonal
  const p = primaryDiagonal(arr);
  // sum secondard diagonal
  const s = secondaryDiagonal(arr);
  // diff

  console.log("primary ", p);
  console.log("secondary ", s);

  return Math.abs(p - s);
}

function primaryDiagonal(arr) {
  let j = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][j];
    j++;
  }
  return sum;
}

function secondaryDiagonal(arr) {
  let j = arr.length - 1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][j];
    j--;
  }
  return sum;
}

const n = 3;
let arr = new Array(n).fill(0).map((row) => new Array(n).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    arr[i][j] = randomInt(-99, 99);
  }
}

arr.forEach((e) => {
  console.log(e);
});

const arrDiagonal = calculateDiagonals(arr);

console.log(arrDiagonal);

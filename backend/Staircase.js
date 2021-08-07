const { randomInt } = require("crypto");
const { setTimeout } = require("timers");

const snooze = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let strSpaces = "";
    let strHashes = "";
    for (let s = 1; s <= n - i; s++) {
      strSpaces += " ";
    }
    for (let h = 0; h < i; h++) {
      strHashes += "#";
    }
    await snooze(125);
    console.log(strSpaces + strHashes);
  }
}

const n = randomInt(5, 20);
console.log("n is ", n);
staircase(n);

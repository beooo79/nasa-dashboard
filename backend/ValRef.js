const fetch = require("node-fetch");

async function fetchData() {
  const response = await fetch("https://randomuser.me/api");
  return await response.json();
}

async function sleep() {
  await new Promise((r) => setTimeout(r, 2000));
}

let customers = [];

fetchData().then((data) => customers.push(data));

console.log(JSON.stringify(customers.pop, null, 2));
